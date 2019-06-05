const stripe = require('stripe')('');
module.exports = (app) => {
    
  
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
                source: token
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

    // const token = req.body.token;
    // const customer = stripe.customers.create({
    //     email: user.email,
    //     source,
    // })

    // user.stripeId = customer.id;
    // user.save();

    // return user;

    }); //end of create customer

    app.post('/api/customer/subscribe', function (req, res, next) {
        //Step1: Grab the plans
        const { plan } = req.body;

        // format
        plan = plan.toLowerCase().trim()

        //Step2: verify the plan
        const plans = ['Onboarding', 'Basic', 'Corporate', 'Enterprise'];
        if (plans.indexOf(plan) == -1) {
            return res.send({
                success: false,
                Message: 'Invalid plan'
            });
        }
        
        //Step3: Grab current user info and pull out customer id
        const customerId = 'cus_EfeWFmVts0mCT7';
        
        //Step4: Subscribe
        const subscription = stripe.subscriptions.create({
            customer: customerId,
            items: [{plan: plan}]
          });

          res.send({
              success: true,
              Message: 'Done'
          })
    });
};