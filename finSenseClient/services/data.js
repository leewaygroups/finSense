var data = [
    {
        name: "John Doe",
        BVN: '00000001',
        account: {
            number: 1213213213,
            openDate: '2013-01-01',
            balance: 5454654
        }
        },
    {
        name: "Jim Doe",
        BVN: '00000002',
        account: {
            number: 89789789765,
            openDate: '2013-01-01',
            balance: 3434334
        }
    },
    {
        name: "Mary Doe",
        BVN: '00000003',
        account: {
            number: 888888777,
            openDate: '2013-01-01',
            balance: 6556556
        }
    }, {
        name: "Paul Smith",
        BVN: '00000001',
        account: {
            number: 65666666,
            openDate: '2013-01-01',
            balance: 56565656565656
        }
    },
    {
        name: "Philip Duru",
        BVN: '00000005',
        account: {
            number: 1232313232,
            openDate: '2013-01-01',
            balance: 56656
        }
    }, {
        name: "John Doe",
        BVN: '00000001',
        account: {
            number: 1213213213,
            openDate: '2013-01-01',
            balance: 566
        }
    }, {
        name: "John Doe",
        BVN: '00000007',
        account: {
            number: 1213213213,
            openDate: '2013-01-01',
            balance: 56565643656
        }
    }, {
        name: "Olu Maintain",
        BVN: '00000004',
        account: {
            number: 1213213213,
            openDate: '2013-01-01',
            balance: 56566
        }
    }, {
        name: "Ifeanyi Ike",
        BVN: '00000020',
        account: {
            number: 1213213213,
            openDate: '2013-01-01',
            balance: 898989
        }
    }, {
        name: "Ngozi Aku",
        BVN: '00000030',
        account: {
            number: 56556546546,
            openDate: '2013-01-01',
            balance: 45645675677587
        }
    }

]

myApp.service('dataService', function(){
    
    this.persons = data;
    
});