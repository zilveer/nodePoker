var deck = [
    ['As', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks',],
    ['Ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd',],
    ['Ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc',],
    ['Ah', '2h', '3h', '4h', '5h', '6h', '7h'   , '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh',],
];

var globalTarget = $('#holdem .hand1');

function setGlobalTarget() {
    $('#holdem .hand').on('click', function(e) {
        // console.log(e.delegateTarget);
        globalTarget = $(e.delegateTarget);
        $($(e.delegateTarget).closest('[id]'))
        // console.log(e);
        $('#cardSelector').css({
            'left': $(globalTarget.parent()).hasClass('board')?'9em':e.pageX + 20 + 'px',
            'top': e.pageY - 120 + 'px'
        });
        $('#clearScreen').show();
        $('#cardSelector').show();
    });
}

function hideStuff() {
    $('#clearScreen').hide();
    $('#cardSelector').hide();
}

function buildSelector(exclude) {
    if (!Array.isArray(exclude)) {
        exclude = [];
    }

    var selector = $('#cardSelector');
    selector.children().remove();
    for (var i = 0; i < deck.length; i++) {
        var hand = $(document.createElement('ul')).addClass('hand');
        
        for (var j = 0; j < deck[i].length; j++) {
            if (exclude.indexOf(deck[i][j]) === -1) {
                var classes = deck[i][j].split('');
                var classes = _.map(classes, rankToRank);
                var classes = _.map(classes, suitToSuit);
                var card = $(document.createElement('li')).addClass('card ' + classes.join(' '));

                var rank = $(document.createElement('span'));
                var rankConversion = rankToRank(classes[0]);
                rank.addClass('rank').text(rankConversion === 'T' ? '10' : rankConversion);
                var suit = $(document.createElement('span'));

                suit.addClass('suit').html('&' + classes[1] + ';');
                card.append(rank);
                card.append(suit);
                hand.append(card);
            }
        }
        selector.append(hand);
    }

    $('#cardSelector li').on('click', clickCard);
}

function clickCard(e) {
    var target = $(e.delegateTarget).clone();

    if ($(globalTarget.children()[0]).hasClass('empty')){
        globalTarget.children().remove();
    }
    globalTarget.append(target);
    target.on('click', deleteCard);

    if ($(globalTarget.parent()).hasClass('board')) {
        if (globalTarget.children().length >= 5) {
            hideStuff();
        }
    } else {
        if (globalTarget.children().length >= 2) {
            hideStuff();
        }
    }


    var cardVal = getCard($(e.delegateTarget)[0]);

    $(e.delegateTarget).remove();
    // console.log(cardVal);
}

function deleteCard(e) {
    var parent = $($(e.delegateTarget).parent());
    $(e.delegateTarget).remove();

    var id = globalTarget.closest('[id]')[0].id;
    var exclude = _.reduce($('#' + id + ' .hand'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    exclude = _.filter(exclude, function(ele) {
        return ele !== '';
    });

    buildSelector(exclude);
    if (!parent.children().length) {
        parent.append($(document.createElement('li')).addClass('empty back card'));
        setGlobalTarget();
    }
}

function getCard(card) {
    var target = card;
    
    var card = _.map(target.classList, function(e) {
        return e;
    });

    if (card.indexOf('back') !== -1 ||
        card.indexOf('empty') !== -1) {
        return '';
    }

    card = _.map(card, rankToRank);
    card = _.map(card, suitToSuit);
    card.shift();
    card = card.join('');
    return card;
}

function getHoldemWinner() {
    var board = _.reduce($('#holdem .board'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);
    board.shift();

    var hand1 = _.reduce($('#holdem .hand1'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand2 = _.reduce($('#holdem .hand2'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand2 = _.reduce($('#holdem .hand2'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand3 = _.reduce($('#holdem .hand3'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand4 = _.reduce($('#holdem .hand4'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand5 = _.reduce($('#holdem .hand5'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand6 = _.reduce($('#holdem .hand6'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand7 = _.reduce($('#holdem .hand7'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand8 = _.reduce($('#holdem .hand8'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand9 = _.reduce($('#holdem .hand9'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var hand10 = _.reduce($('#holdem .hand10'), function(result, value, key) {
        var cards = _.map($(value).children(), function(ele) {
            return getCard(ele);
        });

        return result.concat(cards);
    }, []);

    var url = '';
        url += 'http://dule.one/holdem?board=' + board.join('');
        url += '&hand1=' + hand1.join('');
        url += '&hand2=' + hand2.join('');
        url += '&hand3=' + hand3.join('');
        url += '&hand4=' + hand4.join('');
        url += '&hand5=' + hand5.join('');
        url += '&hand6=' + hand6.join('');
        url += '&hand7=' + hand7.join('');
        url += '&hand8=' + hand8.join('');
        url += '&hand9=' + hand9.join('');
        url += '&hand10=' + hand10.join('');
    $.get(url, function(data) {
        $('#holdem .winner').children().remove();
        $('#holdem .winner').append($('#holdem .' + data.winningHand).clone().removeClass(data.winningHand));
    });
}

function rankToRank(rank) {
    switch (rank) {
        case 'rank-a':
            return 'A';
        case 'rank-2':
            return '2';
        case 'rank-3':
            return '3';
        case 'rank-4':
            return '4';
        case 'rank-5':
            return '5';
        case 'rank-6':
            return '6';
        case 'rank-7':
            return '7';
        case 'rank-8':
            return '8';
        case 'rank-9':
            return '9';
        case 'rank-10':
            return 'T';
        case 'rank-j':
            return 'J';
        case 'rank-q':
            return 'Q';
        case 'rank-k':
            return 'K';
        case 'A':
            return 'rank-a';
        case '2':
            return 'rank-2';
        case '3':
            return 'rank-3';
        case '4':
            return 'rank-4';
        case '5':
            return 'rank-5';
        case '6':
            return 'rank-6';
        case '7':
            return 'rank-7';
        case '8':
            return 'rank-8';
        case '9':
            return 'rank-9';
        case 'T':
            return 'rank-10';
        case 'J':
            return 'rank-j';
        case 'Q':
            return 'rank-q';
        case 'K':
            return 'rank-k';
        default:
            return rank;
    }
};

function suitToSuit(suit) {
    switch (suit) {
        case 'spades':
            return 's';
        case 'diams':
            return 'd';
        case 'clubs':
            return 'c';
        case 'hearts':
            return 'h';
        case 's':
            return 'spades';
        case 'd':
            return 'diams';
        case 'c':
            return 'clubs';
        case 'h':
            return 'hearts';
        default:
            return suit;
    }
};

$(document).ready(function() {
    buildSelector();
    setGlobalTarget();
});