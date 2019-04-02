const express = require('express'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    stripe = require("stripe")("sk_test_tNfMw1CPMohLAcwCGlF2Tfic");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

////              nodemailer                   ////

app.post('/api/form', (req,res) => {
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account');
            console.error(err);
            return process.exit(1);
        }
    
        console.log('Credentials obtained, sending message...');
        console.log(req.body.firstName);
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>First Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h4>Subject</h4>
                <p>${req.body.subject}</p>
            <h3>Message</h3>
                <p>Message: ${req.body.message}</p>`

        const transporter = nodemailer.createTransport({
            host:  'smtp.zoho.com',
            port: 587,
            secure: true, //tls
            auth: {
                user: 'Info@zyllion.co',
                pass: 'Technology2018@#3'
            }
        })

        let mailOptions = {
            from: `${req.body.email}`,
            to: 'Info@zyllion.co',
            replyTo: `${req.body.email}`,
            subject: req.body.subject,
            message: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err,info) => {
            // if (err) {
            //     return console.log(err)
            // }
            if (err) {
                console.log('Error occurred');
                console.log(err.message);
                return process.exit(1);
            }
            console.log('Message sent: %s', info.message)
            console.log('MessageURL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

//              nodemailer End                  //

////              Stripe                   ////

//      Product(SaaS)      //
// const testProduct1 = stripe.products.create({
//     name: 'Test Basic SaaS',
//     type: 'service',
//   });

//      Plan(Plan monthly Subscriptions)      //

//   const testPlan1 = stripe.plans.create({
//     product: 'Test Basic Plan',
//     nickname: 'Test',
//     currency: 'usd',
//     interval: 'month',
//     amount: 60,
//   });  

//      Customer(Zyllion Users)      //

// const testCustomer1 = stripe.customers.create({
//     email: 'jenny.rosen@example.com',
    // Source:customer’s payment instrument //
//     source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
//   });
    // Stripe returns an ID, store to Backend//

//      Subscripton(Putting Customer on Plan)      //

// const subscription = stripe.subscriptions.create({
//     customer: 'cus_EfeWFmVts0mCT7',
//     items: [{plan: 'prod_EfeVUy1IjFgscB'}],
//     });

// const token = stripe.tokens.create({
//         customer: "cus_EfeWFmVts0mCT7",
//       }, {
//         stripe_account: "ca_Eff9fgupNUV1Tb7hbsM41SR1h42ihtYx",
//       }).then(function(token) {
        // asynchronously called
    //   });

//              Stripe End                  //


app.post('/api/customer/create', function (req, res, next) {
    const token = req.body.token;
    

    if (!token) {
        console.log('bUT WHY?');
        return res.send({
            success: false,
            Message: 'No Token'
        });
    } else {
        console.log('Token recieved');
    }
    stripe.customers.create(
        { 
            source: token,
         },
        function(err, customer) {
          if(err) {
              console.error(err)
              console.log('Is this what broke?');
          } else {
              res.send({
                  success: true,
                  customer: customer,
                  customerID: customer.id
              })
              console.log('customer made');
          }
        }
      );

}); //end of create customer

app.post('/api/customer/subscribe', function (req, res, next) {
    //Step1: Grab the plans
    let { plan } = req.body;

    // format
    plan = plan.toLowerCase().trim();

    //Step2: verify the plan
    const plans = ['Onboarding', 'Basic', 'Corporate', 'Enterprise'];
    if (plans.indexOf(plan) == -1) {
        return res.send({
            success: false,
            Message: 'Invalid plan'
        });
    }
    
    //Step3: Grab current user info and pull out customer id
    const customerId = 'cus_EjGkYaovMAMW3e';
    // const customerId = customer.id;
    console.log('through customs');
    
    //Step4: Subscribe
    stripe.subscriptions.create(
        {
        customer: customerId,
        items: [{plan: plan}]
      },

      function(err) {
        if(err) {
            console.error(err)
        } else {
            console.log('Youtube?');
            res.send({
          success: true,
          email: 'Blue@red.green',
          Message: 'Done'
            });
            }
        }
    );

}); //end subscription

app.post('api.zyllion.co/user/login', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    

    if (!email) {
        console.log('You cannot log in');
        return res.send({
            success: true,
            email: email,
            password: password,
            Message: 'Should have sent'
        });
    } else {
        console.log('credentials recieved');
        console.log(error);
    }
    });

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`The Secret Sauce is on Port ${PORT}`);
})

