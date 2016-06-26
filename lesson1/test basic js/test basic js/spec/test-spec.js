describe('Basic JavaScript', function() {


  describe('Main Data types', function() {
    it('should be possible to find out variable data type', function() {

      if (window.lessonTestData) {
        lessonTestData.dataTypes.forEach(function (item){
          expect(getDataType(item)).toEqual(getDataType_vs(item));
        });
      } else {
        expect(getDataType('hello')).toEqual('string');
        expect(getDataType(null)).toEqual('object');
        expect(getDataType(4)).toEqual('number');
      }
    });

    it('should be possible to compare with strict and non strict comparison', function() {

      if (window.lessonTestData) {
        lessonTestData.comparison.forEach(function (item){
          expect(compareByType(item[0], item[1])).toEqual(compareByType_vs(item[0], item[1]));
        });
      } else {
        expect(compareByType('hello', 'hello')).toEqual(1);
        expect(compareByType('', 0)).toEqual(0);
        expect(compareByType(4, undefined)).toEqual(-1);
      }
    });

    it('should be possible to increase only numbers', function() {

      if (window.lessonTestData) {
        lessonTestData.increase.forEach(function (item){
          expect(increase(item)).toEqual(increase_vs(item));
        });
      } else {
        expect(increase([])).toEqual(-1);
        expect(increase('5')).toEqual(-1);
        expect(increase(4)).toEqual(5);
      }
    });

  });

  describe('Arrays', function () {
    it('should be possible to stringify arrays with separators', function() {

      if (window.lessonTestData) {
        lessonTestData.arrayJoinSeparators.forEach(function (separator){
          expect(increase(lessonTestData.arrayJoin, separator)).toEqual(increase_vs(lessonTestData.arrayJoin, separator));
        });
      } else {
        expect(join(['o', 'o', 'p'],"+")).toEqual('o+o+p');
        expect(join([1,,3], "=")).toEqual("1==3");
        expect(join([1,2,3], "")).toEqual("1-2-3");
      }
    });

    it('should be possible to make 1 array from two', function() {

      if (window.lessonTestData) {
        expect(glue(lessonTestData.makeOneArray[0], lessonTestData.makeOneArray[1])).toEqual(glue_vs(lessonTestData.makeOneArray[0], lessonTestData.makeOneArray[1]));
      } else {
        expect(glue(['o', 'o', 'p'], ['is', 'good'])).toEqual(['o','o','p','is','good']);
        expect(glue([1,,3], [5 , 7])).toEqual([1,,3,5,7]);
        expect(glue([1,2,3], [])).toEqual([1,2,3]);
      }
    });


    it('should be possible to sort array', function() {

      if (window.lessonTestData) {
        expect(order(lessonTestData.orderArrayElements)).toEqual(order_vs(lessonTestData.orderArrayElements));
      } else {
        expect(order(["d", "a", "t", "m"])).toEqual(["t", "m", "d", "a"]);
        expect(order([1,2,3])).toEqual([3,2,1]);
      }
    });

    it('should be possible to remove some items from array', function() {

      if (window.lessonTestData) {
        expect(removeNegative(lessonTestData.orderArrayElements)).toEqual(removeNegative_vs(lessonTestData.orderArrayElements));
      } else {
        expect(removeNegative([1,2,-4,3])).toEqual([1,2,3]);
      }
    });

  });

  describe('Strings', function () {
      it('should be possible to create array from string', function () {
        if (window.lessonTestData) {
          expect(stringToArray(lessonTestData.stringToArray)).toEqual(stringToArray_vs(lessonTestData.stringToArray));
        } else {
          expect(stringToArray("this is JavaScript")).toEqual(['this','is','JavaScript']);
        }
      });

       it('should be possible to fetch part of the string', function () {
        if (window.lessonTestData) {
          expect(getStringPart(lessonTestData.stringToArray)).toEqual(getStringPart_vs(lessonTestData.stringToArray));
        } else {
          expect(getStringPart("this is JavaScript, my friend")).toEqual('this is JavaScript');
        }
      });

  });
});
