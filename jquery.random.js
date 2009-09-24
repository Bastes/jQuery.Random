/**
 *
 * jQuery Random plugin
 *
 * @author   Michel Belleville <michel.belleville@gmail.com>
 * @version  1.1.0
 * @requires jQuery v1.3.2 or later
 * @license  GPLv3 [http://www.gnu.org/licenses/gpl.html]
 * 
 * @description Picks element(s) at random in a selection.
 * @param integer num (optional) number of elements to pick
 * 
 * Use :
 * $('#whatever .you .like').random();
 * $('.you_can_event select .more_than_one').random(10);
 * 
 */
(function($) {
  jQuery.fn.random = function(num) {
    num = parseInt(num);
    if (num > this.length) return this.pushStack(this);
    if (! num || num < 1) num = 1;
    var to_take = new Array();
    this.each(function(i) { to_take.push(i); });
    var to_keep = new Array();
    var invert = num > (this.length / 2);
    if (invert) num = this.length - num;
    for (; num > 0; num--) {
      for (var i = parseInt(Math.random() * to_take.length); i > 0; i--)
        to_take.push(to_take.shift());
      to_keep.push(to_take.shift());
    }
    if (invert) to_keep = to_take;
    return this.filter(function(i) { return $.inArray(i, to_keep) != -1; });
  };
}) (jQuery);
