// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function() {
  var DATA = {
    pipeline_15: {
      weights: [
        {
          shape: [3, 3, 2, 4],
          data: [
            -0.63111902,
            -0.95634409,
            -0.32494948,
            -0.86530274,
            -0.10977583,
            -0.87089031,
            -0.2831724,
            -0.2683181,
            0.4517177,
            0.33049811,
            0.75381577,
            -0.37951974,
            0.44532834,
            0.2889885,
            -0.49359124,
            0.39094349,
            0.94599258,
            0.86091338,
            -0.9852919,
            0.24525452,
            0.72338505,
            -0.83955589,
            0.13329391,
            0.56450216,
            0.36176573,
            0.79447512,
            0.4190479,
            -0.25257004,
            -0.14184419,
            -0.39741101,
            -0.92917898,
            -0.91206131,
            -0.57722919,
            0.75124656,
            -0.27722015,
            -0.70389771,
            0.99338299,
            0.92559681,
            -0.58519173,
            0.68080555,
            -0.55160195,
            -0.23299383,
            -0.53215955,
            0.10345683,
            -0.13292767,
            0.22919045,
            -0.59912939,
            -0.3490903,
            -0.43180154,
            0.61658825,
            -0.16244888,
            0.71123668,
            0.1996048,
            0.71246863,
            0.61785043,
            -0.58858764,
            -0.59810617,
            -0.9239512,
            -0.4643184,
            0.8792563,
            -0.95122599,
            0.29960419,
            -0.57028185,
            -0.05542047,
            0.20991869,
            0.97867339,
            0.18396437,
            -0.9566024,
            0.46851086,
            0.86137844,
            -0.94111274,
            -0.54081414
          ]
        },
        { shape: [4], data: [-0.62341441, 0.80760923, 0.39425973, -0.86905336] },
        {
          shape: [3, 3, 2, 4],
          data: [
            -0.57559406,
            -0.79558496,
            0.30525543,
            0.33930008,
            -0.09429176,
            0.67972065,
            -0.1938887,
            -0.31834536,
            -0.80849926,
            -0.4297116,
            -0.05410766,
            0.66158055,
            -0.15349832,
            -0.97954664,
            -0.91397458,
            0.25709367,
            0.04455153,
            0.0429758,
            -0.36247761,
            0.01636135,
            -0.08237875,
            0.69957459,
            0.93711285,
            -0.4300287,
            0.02518927,
            -0.25095386,
            0.00475471,
            -0.89805264,
            -0.29666824,
            -0.51207716,
            -0.75858802,
            0.25692441,
            0.2138158,
            -0.61836769,
            -0.74371343,
            -0.13047118,
            0.92004037,
            0.51257473,
            0.44880883,
            0.48670593,
            -0.30446012,
            -0.61557333,
            0.02860066,
            0.31524334,
            0.01545179,
            0.56080726,
            -0.14143453,
            0.53704002,
            -0.51089154,
            0.57242975,
            0.52709552,
            0.57482202,
            -0.92931545,
            -0.86701571,
            0.83818155,
            -0.5998221,
            -0.11894102,
            0.67122817,
            0.44406211,
            0.46994705,
            0.42972301,
            0.87629543,
            -0.89738643,
            0.46047875,
            0.49143583,
            -0.10886521,
            0.78078546,
            -0.80050792,
            0.96920354,
            -0.3076998,
            0.57011586,
            -0.46292081
          ]
        },
        { shape: [4], data: [0.60223114, -0.61221382, -0.24920805, 0.7584347] }
      ],
      inputs: [
        {
          shape: [8, 8, 2],
          data: [
            -0.63111902,
            -0.95634409,
            -0.32494948,
            -0.86530274,
            -0.10977583,
            -0.87089031,
            -0.2831724,
            -0.2683181,
            0.4517177,
            0.33049811,
            0.75381577,
            -0.37951974,
            0.44532834,
            0.2889885,
            -0.49359124,
            0.39094349,
            0.94599258,
            0.86091338,
            -0.9852919,
            0.24525452,
            0.72338505,
            -0.83955589,
            0.13329391,
            0.56450216,
            0.36176573,
            0.79447512,
            0.4190479,
            -0.25257004,
            -0.14184419,
            -0.39741101,
            -0.92917898,
            -0.91206131,
            -0.57722919,
            0.75124656,
            -0.27722015,
            -0.70389771,
            0.99338299,
            0.92559681,
            -0.58519173,
            0.68080555,
            -0.55160195,
            -0.23299383,
            -0.53215955,
            0.10345683,
            -0.13292767,
            0.22919045,
            -0.59912939,
            -0.3490903,
            -0.43180154,
            0.61658825,
            -0.16244888,
            0.71123668,
            0.1996048,
            0.71246863,
            0.61785043,
            -0.58858764,
            -0.59810617,
            -0.9239512,
            -0.4643184,
            0.8792563,
            -0.95122599,
            0.29960419,
            -0.57028185,
            -0.05542047,
            0.20991869,
            0.97867339,
            0.18396437,
            -0.9566024,
            0.46851086,
            0.86137844,
            -0.94111274,
            -0.54081414,
            0.27645795,
            0.51172296,
            0.78840268,
            -0.84079232,
            0.90801351,
            0.47207751,
            0.34246808,
            -0.0949509,
            0.11783686,
            0.3651873,
            -0.35107527,
            -0.80749691,
            0.0837793,
            0.56779913,
            -0.85454722,
            0.31300526,
            0.66591566,
            -0.96051911,
            0.25973568,
            -0.05153491,
            0.72845178,
            0.11773259,
            0.45639941,
            0.00229527,
            -0.7536802,
            -0.76203887,
            0.90293798,
            -0.44683854,
            0.45418415,
            0.58794314,
            -0.54125795,
            -0.48162186,
            0.40957385,
            0.66982545,
            0.52696719,
            0.71357407,
            -0.54680955,
            0.537319,
            0.31794316,
            0.71617843,
            -0.64636802,
            0.57848022,
            -0.9914417,
            -0.56725481,
            0.4140449,
            -0.23292791,
            -0.19702078,
            0.71392619,
            0.85083666,
            -0.56218451,
            -0.35979562,
            0.27988069,
            -0.49515975,
            0.86477503,
            -0.41233981,
            -0.81708716
          ]
        },
        {
          shape: [8, 8, 2],
          data: [
            -0.62341441,
            0.80760923,
            0.39425973,
            -0.86905336,
            -0.37502665,
            -0.66733892,
            -0.21484036,
            -0.9217024,
            -0.73323108,
            0.54725412,
            -0.4332252,
            0.29129001,
            0.74952838,
            -0.51454198,
            -0.14873697,
            0.30204654,
            0.7658193,
            -0.43572277,
            0.72260679,
            -0.52022192,
            0.95550256,
            0.82911618,
            -0.87908933,
            -0.22067121,
            0.96436745,
            0.24143573,
            -0.13818543,
            0.06519894,
            0.06351466,
            -0.33841009,
            -0.89260939,
            -0.46262971,
            -0.6631591,
            0.81509016,
            0.50563581,
            -0.4205786,
            -0.68612942,
            -0.41376171,
            0.39640009,
            -0.64454337,
            -0.14113051,
            -0.5120256,
            -0.79987955,
            -0.99991831,
            -0.43792857,
            -0.07122612,
            -0.62474953,
            -0.70473234,
            -0.56787879,
            -0.08942438,
            -0.44167869,
            -0.13934699,
            -0.28187051,
            0.15428399,
            -0.46115177,
            -0.596429,
            0.20988411,
            0.02323412,
            0.95978899,
            0.45096164,
            0.38732439,
            0.05899614,
            -0.97922036,
            -0.01935168,
            0.76069196,
            0.22244868,
            0.28963332,
            0.77580504,
            0.72144215,
            0.46934365,
            0.00722851,
            -0.77084635,
            -0.38609692,
            -0.83065241,
            -0.06500573,
            -0.76936164,
            -0.21102859,
            -0.83886688,
            0.76237266,
            0.84153115,
            -0.93116891,
            -0.12125103,
            0.19358915,
            -0.58607046,
            -0.58910373,
            -0.65977271,
            0.16714709,
            0.04554938,
            0.71304568,
            0.93426392,
            0.31328509,
            0.28492367,
            0.69096582,
            0.58028142,
            0.52952083,
            -0.24711347,
            0.11163878,
            -0.32059858,
            -0.98047373,
            0.34836363,
            -0.75731539,
            -0.53075954,
            0.52298447,
            0.87675697,
            -0.35741433,
            0.91365536,
            -0.34192352,
            0.0067881,
            0.69169633,
            -0.86311878,
            0.34185765,
            -0.33606587,
            -0.26281898,
            -0.51464181,
            0.33928768,
            0.61550346,
            -0.90942011,
            -0.31681785,
            0.19705871,
            0.08291552,
            -0.31978805,
            0.59028648,
            -0.48019507,
            0.06302693,
            0.64893566,
            -0.47718587,
            0.73859632,
            0.12113113
          ]
        }
      ],
      expected: {
        shape: [6, 6, 4],
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.63146585,
          0.0698073,
          0.99999464,
          0,
          0,
          0,
          0.00563527,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.45013189,
          0,
          0.27269217,
          0,
          2.26947403,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.84456187,
          2.70018649,
          0,
          2.47649932,
          4.01250935,
          0,
          0,
          0,
          0,
          0,
          2.86277676,
          0,
          0,
          0.32357314,
          0,
          0,
          0,
          0,
          0,
          3.25349426,
          0,
          0,
          0.77345651,
          0,
          0,
          0,
          0,
          0.38187587,
          0,
          0,
          0,
          1.290833,
          0,
          0,
          0.17194168,
          0,
          0,
          0,
          0,
          0,
          0,
          0.54859376,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.04397602,
          0.55637789,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1.29056919,
          0.0656721,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1.4032836,
          0,
          0,
          0,
          0,
          1.7022351,
          0,
          0,
          1.75915396,
          0,
          0,
          0.06258378,
          0,
          0,
          0.31928271,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    }
  };

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA);
})();
