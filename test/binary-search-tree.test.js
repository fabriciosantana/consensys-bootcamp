const { expect } = require('chai');
const Tree = require("../binary-search-tree")

// unit tests
// do not modify the below code
describe('Binary Search Tree', function() {
    it('creates a correct tree', () => {
      const nums = [3,7,4,6,5,1,10,2,9,8];
      const tree = new Tree();
      nums.map( num => tree.add(num));
      const objs = tree.toObject();
      //render(objs, nums);
  
      expect(objs.value).to.be.equal(3);
      
      expect(objs.left.value).to.be.equal(1);
      expect(objs.left.left).to.be.null;
      
      expect(objs.left.right.value).to.be.equal(2);
      expect(objs.left.right.left).to.be.null;
      expect(objs.left.right.right).to.be.null;
      
      expect(objs.right.value).to.be.equal(7);
      
      expect(objs.right.left.value).to.be.equal(4);
      expect(objs.right.left.left).to.be.null;
      
      expect(objs.right.left.right.value).to.be.equal(6);
      expect(objs.right.left.right.left.value).to.be.equal(5);
      expect(objs.right.left.right.left.right).to.be.null;
      expect(objs.right.left.right.left.left).to.be.null;
      
      expect(objs.right.right.value).to.be.equal(10);
      expect(objs.right.right.right).to.be.null;
      
      expect(objs.right.right.left.value).to.be.equal(9);
      expect(objs.right.right.left.right).to.be.null;
      
      expect(objs.right.right.left.left.value).to.be.equal(8);
      expect(objs.right.right.left.left.right).to.be.null;
      expect(objs.right.right.left.left.left).to.be.null;
    });

    it('creates a edge case', () => {
      const nums = [1,2,3,4,5,0];
      const tree = new Tree();
      nums.map( num => tree.add(num));
      const objs = tree.toObject();
      //render(objs, nums);
  
      expect(objs.value).to.be.equal(1);
      
      expect(objs.right.value).to.be.equal(2);
      expect(objs.left.value).to.be.equal(0);

      expect(objs.right.right.value).to.be.equal(3);
      expect(objs.right.left).to.be.null;

      expect(objs.right.right.right.value).to.be.equal(4);
      expect(objs.right.right.left).to.be.null;

      expect(objs.right.right.right.right.value).to.be.equal(5);
      expect(objs.right.right.right.left).to.be.null;
      
    });
  });