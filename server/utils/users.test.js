const expect = require('expect');

const{Users} = require('./users');


describe('Users', function(){

    var users;
    beforeEach(function(){
        users = new Users();
        users.users = [{
            id: '1', 
            name: 'John',
            room: 'Test Room A'
        },{
            id: '2', 
            name: 'Sara',
            room: 'Test Room A'
        },{
            id: '3', 
            name: 'Mike',
            room: 'Test Room B'
        }]
    });

    it('should add new user', function(){
        var users = new Users();
        var user = {
            id: '123', 
            name: 'John',
            room: 'Test Room'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', function(){
        var removedUser = users.removeUser('1');
        expect(users.users).toNotContain(removedUser);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', function(){
        var removedUser = users.removeUser('4');
        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', function(){
        var res = users.getUser('1');
        expect(res).toBe(users.users[0]);
    });

    it('should not find user', function(){
        var res = users.getUser('4');
        expect(res).toNotExist();
    });
    
    


    it('should return names for Test Room A', function(){
        var userList = users.getUserList('Test Room A');
        expect(userList).toEqual(['John', 'Sara']);
    })
    it('should return names for Test Room B', function(){
        var userList = users.getUserList('Test Room B');
        expect(userList).toEqual(['Mike']);
    })
});