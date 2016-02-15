//Test data for dev only.
//As development matures, application will be pointed to
// a MonngoDB database instance.

var Currency = {
    NGN: {
        name: 'Naira',
        short: 'NGN',
        issuingCountry: ['Nigeria'],
        xchangeCurrent: 200,
        lastUpdate: '2016-02-11'
    },
    BAHT: {
        name: 'Baht',
        short: 'BAHT',
        issuingCountry: ['Thailand'],
        xchangeCurrent: 38,
        lastUpdate: '2016-02-11'
    }
}

var Users = [
    {
        username: 'Prince',
        password: 'Prince',
        roles: [
            'SAdmin'
        ]
    },
    {
        username: 'Chris',
        password: 'Chris',
        roles: [
            'SAdmin'
        ]
    },
    {
        username: 'Chris2',
        password: 'Chris2',
        roles: ['Admin'],
        scope: ['BRCH01']
    }
];

var Accounts = [
    {
        id: 1,
        label: "OluWole",
        number: "3455656500",
        owners: [
            {
                BVN: "12325613",
                provider: "Ajebu Bank",
                display_name: "Mr KC Jantamanta"
            }
        ],
        type: "current",
        balance: {
            currency: Currency.NGN.short,
            amount: 8987987
        },
        brachSortCode: "BRCH01"
    },
    {
        id: 2,
        label: "Ozumba and Co",
        number: "3243242343",
        owners: [
            {
                BVN: "12325613",
                provider: "Ajebu Bank",
                display_name: "Mr KC Jantamanta"
            },
            {
                BVN: "1234543",
                provider: "Ajebu Bank",
                display_name: "Power Mike"
            }
        ],
        type: "current",
        balance: {
            currency: Currency.NGN.short,
            amount: 6576875
        },
        brachSortCode: "BRCH01"
    },
    {
        id: 3,
        label: "Ikpe Ama Eze and Co",
        number: "5456565600",
        owners: [
            {
                BVN: "12325613",
                provider: "Ajebu Bank",
                display_name: "Mr KC Jantamanta"
            },
            {
                BVN: "566786",
                provider: "Ajebu Bank",
                display_name: "Doro Buchi"
            },
            {
                BVN: "556656",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Ajebu Bank"
                },
                display_name: "One Hit Jonny"
            }
        ],
        type: "current",
        balance: {
            currency: Currency.NGN.short,
            amount: 987898
        }
    },
    {
        id: 4,
        label: "Look and Laugh",
        number: "4356544555",
        owners: [
            {
                BVN: "657657",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Thunder Balogun"
            },
            {
                BVN: "545456",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Pa James"
            }
        ],
        type: "current",
        balance: {
            currency: Currency.NGN.short,
            amount: 876868
        }
    },
    {
        id: 5,
        label: "Lumpini Park",
        number: "6867867878",
        owners: [
            {
                BVN: "9879879",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Jessada Chena"
            }
        ],
        type: "savings",
        balance: {
            currency: Currency.BAHT.short,
            amount: 8987987
        }
    },
    {
        id: 6,
        label: "OluWole",
        number: "3455656546",
        owners: [
            {
                BVN: "12325613",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Olu Oluola"
            },
            {
                BVN: "0980980",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Lolo One"
            },
            {
                BVN: "34342439",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Sambo Dasuki"
            },
            {
                BVN: "2332090",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Boy Alinko"
            },
            {
                BVN: "344399",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Ajasko"
            },
            {
                BVN: "565656",
                provider: {
                    brachSortCode: "BRCH02",
                    name: "Voodoo Bank"
                },
                display_name: "Ms Kpepkeye"
            }
        ],
        type: "current",
        balance: {
            currency: Currency.NGN.short,
            amount: 8987987
        }
    }
];

module.exports = {
    users: Users,
    accounts: Accounts,
    currency: Currency,
    secrete: '34534tergdfgt45645tfegrt45wtesgt4rt4w5'
};