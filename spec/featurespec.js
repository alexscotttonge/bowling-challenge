'use strict';

describe ('Feature tests: Player', function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe('#roll', function() {
    it('can roll a ball and return a score', function() {
      expect(player.roll(4)).toEqual(4);
    });
  });

  describe("#Score", function() {
    it('can return the score for a gutter game', function() {
      player.roll(6);
      player.roll(3);
      player.roll(2);
      expect(player.score()).toEqual(11);
    })
  })

  // describe("#spareScore", function() {
  //   it('can return the scores for a game with spares', function() {
  //     player.roll(6);
  //     player.roll(4);
  //     player.roll(3);
  //     expect(player.spareScore()).toEqual(16);
  //   })
  // })

  describe("#frames", function() {
    it("can return the points in each frame for a gutter game", function() {
      player.roll(4);
      player.roll(4);
      player.roll(3);
      player.roll(4);
      expect(player.frames()).toEqual([[4,4],[3,4]])
    })
  })

  describe("#frameScores", function() {
    it("can return the points in each frame for a gutter game", function() {
      player.roll(4);
      player.roll(4);
      player.roll(3);
      player.roll(4);
      expect(player.frameScores()).toEqual([[8],[7]])
    })
  })



});
