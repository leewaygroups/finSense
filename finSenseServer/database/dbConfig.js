//MongoDb database settup.
//All db configs should be defined here.
var databases = {
    finSense: {
        name: 'finSense',
        url: 'mongodb://localhost:27017/finSense',
        schemas: function (mongoose) {
            //setup this db schemas here
            var UserSchema = mongoose.Schema({
                username: String,
                password: String,
                roles: Array
            });
            var AccoutSchema = mongoose.Schema({
                id: String,
                label: String,
                number: String,
                owners: Array,
                type: String,
                balance: Object,
                brachSortCode: String
            });
            var CurrencySchema = mongoose.Schema({
                name: String,
                issuingCountry: Array,
                xchangeCurrent: Numbers,
                lastUpdate: Timestamp
            });

            return {
                User: mongoose.model('User', UserSchema),
                Account: mongoose.model('Account', AccoutSchema),
                Currency: mongoose.model('Currency', CurrencySchema)
            };
        }
    }
};


module.exports = {
    databases: databases,
    secrete: '34534tergdfgt45645tfegrt45wtesgt4rt4w5'
};