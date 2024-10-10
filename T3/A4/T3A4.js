'use strict';

const movimientos = [{propietario:"María",movimiento:3812.428,fecha: new Date('2023-09-28 02:31:49'),domiciliado:false},{propietario:"Sara",movimiento:3553.459,fecha: new Date('2023-10-04 04:09:30'),domiciliado:false},{propietario:"Rosa",movimiento:1457.327,fecha: new Date('2023-10-29 09:48:17'),domiciliado:false},{propietario:"David",movimiento:4479.565,fecha: new Date('2023-09-17 09:07:10'),domiciliado:false},{propietario:"Rosa",movimiento:-4049.881,fecha: new Date('2023-09-22 05:17:58'),domiciliado:false},{propietario:"Isabel",movimiento:-2931.347,fecha: new Date('2023-09-22 15:27:58'),domiciliado:true},{propietario:"Sara",movimiento:1524.264,fecha: new Date('2023-10-05 03:55:03'),domiciliado:false},{propietario:"Sara",movimiento:-1596.056,fecha: new Date('2023-09-12 08:27:23'),domiciliado:true},{propietario:"Juan",movimiento:-1456.01,fecha: new Date('2023-09-28 04:31:02'),domiciliado:false},{propietario:"Manuel",movimiento:3917.16,fecha: new Date('2023-09-25 10:29:21'),domiciliado:false},{propietario:"Isabel",movimiento:2230.745,fecha: new Date('2023-09-18 20:43:06'),domiciliado:false},{propietario:"David",movimiento:2148.416,fecha: new Date('2023-09-25 05:38:12'),domiciliado:false},{propietario:"Isabel",movimiento:1898.919,fecha: new Date('2023-10-23 05:34:45'),domiciliado:false},{propietario:"Diego",movimiento:-4686.38,fecha: new Date('2023-10-18 11:10:47'),domiciliado:true},{propietario:"Isabel",movimiento:2469.976,fecha: new Date('2023-09-10 10:45:52'),domiciliado:true},{propietario:"Sara",movimiento:-446.797,fecha: new Date('2023-10-26 23:29:42'),domiciliado:false},{propietario:"David",movimiento:1997.05,fecha: new Date('2023-10-12 17:02:52'),domiciliado:false},{propietario:"Lucía",movimiento:-1322.335,fecha: new Date('2023-09-04 15:50:31'),domiciliado:true},{propietario:"María",movimiento:4568.93,fecha: new Date('2023-09-05 02:38:59'),domiciliado:true},{propietario:"María",movimiento:-2646.001,fecha: new Date('2023-09-25 13:35:31'),domiciliado:true},{propietario:"David",movimiento:3790.585,fecha: new Date('2023-10-19 11:58:25'),domiciliado:true},{propietario:"Lucía",movimiento:3318.18,fecha: new Date('2023-10-05 02:25:46'),domiciliado:true},{propietario:"David",movimiento:69.091,fecha: new Date('2023-10-04 13:54:04'),domiciliado:true},{propietario:"Sara",movimiento:1763.635,fecha: new Date('2023-09-23 05:38:36'),domiciliado:true},{propietario:"Pepe",movimiento:-673.391,fecha: new Date('2023-10-30 00:01:12'),domiciliado:true},{propietario:"David",movimiento:-2529.447,fecha: new Date('2023-09-06 16:52:22'),domiciliado:true},{propietario:"María",movimiento:4610.796,fecha: new Date('2023-10-24 01:13:45'),domiciliado:true},{propietario:"Sara",movimiento:-20.749,fecha: new Date('2023-09-09 16:27:30'),domiciliado:false},{propietario:"Diego",movimiento:2914.706,fecha: new Date('2023-10-20 03:24:27'),domiciliado:false},{propietario:"Diego",movimiento:3285.707,fecha: new Date('2023-09-09 10:30:47'),domiciliado:true},{propietario:"María",movimiento:-2133.452,fecha: new Date('2023-10-02 05:41:52'),domiciliado:false},{propietario:"Sara",movimiento:-2406.281,fecha: new Date('2023-09-20 07:04:39'),domiciliado:false},{propietario:"Manuel",movimiento:2370.661,fecha: new Date('2023-10-15 06:12:14'),domiciliado:true},{propietario:"Manuel",movimiento:1316.641,fecha: new Date('2023-09-13 20:57:58'),domiciliado:true},{propietario:"Sara",movimiento:-2835.673,fecha: new Date('2023-10-21 03:37:40'),domiciliado:true},{propietario:"Sara",movimiento:-313.265,fecha: new Date('2023-10-07 23:51:03'),domiciliado:true},{propietario:"Sara",movimiento:2194.748,fecha: new Date('2023-09-23 06:56:47'),domiciliado:false},{propietario:"Juan",movimiento:1009.483,fecha: new Date('2023-09-18 19:04:35'),domiciliado:false},{propietario:"Lucía",movimiento:4322.202,fecha: new Date('2023-09-09 02:38:23'),domiciliado:true},{propietario:"Isabel",movimiento:-1461.84,fecha: new Date('2023-09-12 03:57:49'),domiciliado:true},{propietario:"Diego",movimiento:-4268.983,fecha: new Date('2023-10-23 01:33:48'),domiciliado:false},{propietario:"Sara",movimiento:-1260.101,fecha: new Date('2023-09-08 04:13:43'),domiciliado:true},{propietario:"Sara",movimiento:-4673.4,fecha: new Date('2023-09-07 13:58:35'),domiciliado:false},{propietario:"Isabel",movimiento:3094.296,fecha: new Date('2023-10-21 16:43:50'),domiciliado:false},{propietario:"Diego",movimiento:-1446.81,fecha: new Date('2023-09-24 15:36:16'),domiciliado:false},{propietario:"María",movimiento:2470.699,fecha: new Date('2023-09-23 13:04:51'),domiciliado:true},{propietario:"David",movimiento:1656.435,fecha: new Date('2023-10-05 18:21:22'),domiciliado:false},{propietario:"Lucía",movimiento:-3714.467,fecha: new Date('2023-10-07 07:22:14'),domiciliado:true},{propietario:"Isabel",movimiento:-2754.283,fecha: new Date('2023-09-22 10:58:15'),domiciliado:true},{propietario:"Rosa",movimiento:-882.078,fecha: new Date('2023-09-30 14:47:38'),domiciliado:false},{propietario:"Manuel",movimiento:3731.741,fecha: new Date('2023-10-26 03:38:34'),domiciliado:true},{propietario:"Rosa",movimiento:1321.3,fecha: new Date('2023-09-02 16:16:44'),domiciliado:true},{propietario:"David",movimiento:568.592,fecha: new Date('2023-10-20 05:55:01'),domiciliado:false},{propietario:"María",movimiento:-3764.146,fecha: new Date('2023-09-23 20:40:38'),domiciliado:false},{propietario:"Pepe",movimiento:4551.733,fecha: new Date('2023-09-24 02:59:05'),domiciliado:false},{propietario:"Pepe",movimiento:1575.483,fecha: new Date('2023-10-07 12:42:55'),domiciliado:true},{propietario:"María",movimiento:-1961.398,fecha: new Date('2023-10-10 01:31:51'),domiciliado:true},{propietario:"Manuel",movimiento:-786.788,fecha: new Date('2023-10-19 19:42:32'),domiciliado:true},{propietario:"Pepe",movimiento:873.304,fecha: new Date('2023-10-14 06:12:13'),domiciliado:true},{propietario:"Sara",movimiento:3470.919,fecha: new Date('2023-10-29 00:14:04'),domiciliado:true},{propietario:"Diego",movimiento:4396.003,fecha: new Date('2023-09-10 20:58:57'),domiciliado:true},{propietario:"Diego",movimiento:3793.006,fecha: new Date('2023-10-10 04:37:59'),domiciliado:false},{propietario:"Rosa",movimiento:-2810.25,fecha: new Date('2023-09-23 16:38:41'),domiciliado:true},{propietario:"Lucía",movimiento:856.756,fecha: new Date('2023-10-26 05:06:21'),domiciliado:false},{propietario:"Juan",movimiento:2290.127,fecha: new Date('2023-09-29 13:58:38'),domiciliado:false},{propietario:"Lucía",movimiento:1368.354,fecha: new Date('2023-10-17 07:08:20'),domiciliado:false},{propietario:"David",movimiento:-3775.263,fecha: new Date('2023-09-03 12:02:20'),domiciliado:true},{propietario:"Rosa",movimiento:-4668.884,fecha: new Date('2023-09-29 07:33:59'),domiciliado:false},{propietario:"Sara",movimiento:2807.908,fecha: new Date('2023-10-03 01:57:03'),domiciliado:false},{propietario:"Sara",movimiento:4324.502,fecha: new Date('2023-10-29 09:41:41'),domiciliado:false},{propietario:"Rosa",movimiento:-696.046,fecha: new Date('2023-09-08 19:38:12'),domiciliado:true},{propietario:"David",movimiento:3399.546,fecha: new Date('2023-09-13 12:28:53'),domiciliado:true},{propietario:"María",movimiento:3985.421,fecha: new Date('2023-10-26 19:25:15'),domiciliado:true},{propietario:"Lucía",movimiento:-4128.389,fecha: new Date('2023-10-04 23:01:06'),domiciliado:false},{propietario:"Diego",movimiento:544.975,fecha: new Date('2023-10-16 02:27:48'),domiciliado:false},{propietario:"Isabel",movimiento:-491.256,fecha: new Date('2023-10-01 00:26:25'),domiciliado:false},{propietario:"Juan",movimiento:4960.901,fecha: new Date('2023-09-27 17:46:52'),domiciliado:false},{propietario:"Pepe",movimiento:-3956.194,fecha: new Date('2023-09-11 02:58:05'),domiciliado:true},{propietario:"Rosa",movimiento:4180.407,fecha: new Date('2023-09-21 02:08:53'),domiciliado:false},{propietario:"Juan",movimiento:-1349.693,fecha: new Date('2023-10-24 08:30:20'),domiciliado:true},{propietario:"Pepe",movimiento:2122.5,fecha: new Date('2023-10-19 13:16:51'),domiciliado:true},{propietario:"María",movimiento:-4633.851,fecha: new Date('2023-09-20 14:49:07'),domiciliado:true},{propietario:"Juan",movimiento:-4940.367,fecha: new Date('2023-10-23 21:05:49'),domiciliado:true},{propietario:"Sara",movimiento:-1700.002,fecha: new Date('2023-09-06 16:28:57'),domiciliado:true},{propietario:"María",movimiento:2530.576,fecha: new Date('2023-09-01 14:12:02'),domiciliado:true},{propietario:"Sara",movimiento:3925.447,fecha: new Date('2023-09-01 11:05:57'),domiciliado:true},{propietario:"Pepe",movimiento:4606.279,fecha: new Date('2023-10-12 21:04:40'),domiciliado:true},{propietario:"María",movimiento:-1381.493,fecha: new Date('2023-09-23 01:25:11'),domiciliado:false},{propietario:"Diego",movimiento:-191.775,fecha: new Date('2023-09-10 19:10:33'),domiciliado:false},{propietario:"Isabel",movimiento:2218.147,fecha: new Date('2023-09-25 00:00:58'),domiciliado:true},{propietario:"María",movimiento:52.511,fecha: new Date('2023-09-29 12:58:47'),domiciliado:true},{propietario:"Manuel",movimiento:2495.292,fecha: new Date('2023-09-04 09:36:29'),domiciliado:false},{propietario:"Isabel",movimiento:3239.992,fecha: new Date('2023-09-12 14:08:08'),domiciliado:false},{propietario:"Manuel",movimiento:4104.585,fecha: new Date('2023-10-05 12:13:44'),domiciliado:false},{propietario:"Juan",movimiento:328.18,fecha: new Date('2023-10-29 22:00:33'),domiciliado:false},{propietario:"María",movimiento:1701.923,fecha: new Date('2023-10-27 00:35:31'),domiciliado:true},{propietario:"Pepe",movimiento:-179.807,fecha: new Date('2023-09-13 01:34:16'),domiciliado:false},{propietario:"David",movimiento:-2008.753,fecha: new Date('2023-10-28 04:02:31'),domiciliado:true},{propietario:"Lucía",movimiento:4999.509,fecha: new Date('2023-09-05 18:10:50'),domiciliado:false},{propietario:"David",movimiento:-4594.261,fecha: new Date('2023-10-18 13:31:15'),domiciliado:false},{propietario:"Pepe",movimiento:4227.103,fecha: new Date('2023-09-11 10:18:55'),domiciliado:false},{propietario:"Isabel",movimiento:2086.731,fecha: new Date('2023-10-03 01:58:55'),domiciliado:false},{propietario:"Diego",movimiento:18.342,fecha: new Date('2023-10-29 23:58:33'),domiciliado:true},{propietario:"David",movimiento:-1063.425,fecha: new Date('2023-09-18 22:05:50'),domiciliado:false},{propietario:"María",movimiento:1425.296,fecha: new Date('2023-10-19 02:32:02'),domiciliado:true},{propietario:"Rosa",movimiento:-700.933,fecha: new Date('2023-09-03 06:21:46'),domiciliado:true},{propietario:"Diego",movimiento:2382.901,fecha: new Date('2023-09-07 00:34:55'),domiciliado:true},{propietario:"María",movimiento:-4205.112,fecha: new Date('2023-09-16 05:50:19'),domiciliado:true},{propietario:"David",movimiento:1075.46,fecha: new Date('2023-09-23 17:14:29'),domiciliado:false},{propietario:"Juan",movimiento:-2747.958,fecha: new Date('2023-09-15 12:32:44'),domiciliado:false},{propietario:"Juan",movimiento:3396.144,fecha: new Date('2023-09-30 03:41:15'),domiciliado:true},{propietario:"Lucía",movimiento:3088.801,fecha: new Date('2023-10-14 20:15:10'),domiciliado:false},{propietario:"Rosa",movimiento:637.54,fecha: new Date('2023-10-12 22:53:36'),domiciliado:false},{propietario:"Manuel",movimiento:-2341.521,fecha: new Date('2023-09-17 16:13:53'),domiciliado:false},{propietario:"María",movimiento:-2854.566,fecha: new Date('2023-09-20 22:56:28'),domiciliado:true},{propietario:"Isabel",movimiento:-1619.385,fecha: new Date('2023-10-23 09:50:06'),domiciliado:false},{propietario:"David",movimiento:-96.694,fecha: new Date('2023-10-17 11:50:33'),domiciliado:true},{propietario:"Lucía",movimiento:3012.321,fecha: new Date('2023-09-16 05:57:54'),domiciliado:false},{propietario:"Lucía",movimiento:2210.807,fecha: new Date('2023-09-23 10:19:19'),domiciliado:true},{propietario:"Pepe",movimiento:-2888.255,fecha: new Date('2023-10-13 05:26:02'),domiciliado:false},{propietario:"Lucía",movimiento:-2856.896,fecha: new Date('2023-10-27 08:31:24'),domiciliado:false},{propietario:"María",movimiento:1683.913,fecha: new Date('2023-09-29 06:00:08'),domiciliado:false},{propietario:"Sara",movimiento:1797.691,fecha: new Date('2023-09-19 19:16:46'),domiciliado:false},{propietario:"Isabel",movimiento:-3026.96,fecha: new Date('2023-09-29 05:13:16'),domiciliado:true},{propietario:"Lucía",movimiento:3098.43,fecha: new Date('2023-09-24 09:04:53'),domiciliado:true},{propietario:"Sara",movimiento:-1187.124,fecha: new Date('2023-09-01 22:40:05'),domiciliado:false},{propietario:"Isabel",movimiento:4309.138,fecha: new Date('2023-09-23 23:06:40'),domiciliado:true},{propietario:"Pepe",movimiento:2590.508,fecha: new Date('2023-09-18 18:21:43'),domiciliado:true},{propietario:"Pepe",movimiento:4988.231,fecha: new Date('2023-10-24 14:59:57'),domiciliado:false},{propietario:"Isabel",movimiento:2216.995,fecha: new Date('2023-09-07 12:22:40'),domiciliado:true},{propietario:"Sara",movimiento:3565.725,fecha: new Date('2023-09-20 14:50:04'),domiciliado:true},{propietario:"Pepe",movimiento:-2316.854,fecha: new Date('2023-10-05 06:21:14'),domiciliado:false},{propietario:"Pepe",movimiento:3133.9,fecha: new Date('2023-09-02 09:34:48'),domiciliado:true},{propietario:"Pepe",movimiento:3032.957,fecha: new Date('2023-10-06 03:34:08'),domiciliado:true},{propietario:"David",movimiento:-2904.635,fecha: new Date('2023-10-11 22:29:45'),domiciliado:false},{propietario:"David",movimiento:-2324.898,fecha: new Date('2023-09-25 03:18:10'),domiciliado:false},{propietario:"Sara",movimiento:2150.184,fecha: new Date('2023-09-09 10:29:58'),domiciliado:false},{propietario:"Diego",movimiento:-746.352,fecha: new Date('2023-10-10 19:16:38'),domiciliado:false},{propietario:"Rosa",movimiento:4865.823,fecha: new Date('2023-09-30 00:26:23'),domiciliado:true},{propietario:"Sara",movimiento:-2215.501,fecha: new Date('2023-10-25 12:23:55'),domiciliado:true},{propietario:"Isabel",movimiento:-2123.888,fecha: new Date('2023-10-03 02:53:29'),domiciliado:true},{propietario:"Diego",movimiento:3729.11,fecha: new Date('2023-09-06 06:14:34'),domiciliado:false},{propietario:"María",movimiento:-3732.215,fecha: new Date('2023-09-12 07:07:06'),domiciliado:true},{propietario:"Isabel",movimiento:-1642.54,fecha: new Date('2023-09-12 05:19:02'),domiciliado:false},{propietario:"Pepe",movimiento:1423.775,fecha: new Date('2023-10-21 22:29:46'),domiciliado:false},{propietario:"Juan",movimiento:-2434.816,fecha: new Date('2023-09-24 07:03:44'),domiciliado:true},{propietario:"Juan",movimiento:2372.139,fecha: new Date('2023-10-03 21:50:26'),domiciliado:true},{propietario:"Rosa",movimiento:116.627,fecha: new Date('2023-09-02 17:40:47'),domiciliado:true},{propietario:"Pepe",movimiento:-1324.713,fecha: new Date('2023-10-24 15:19:45'),domiciliado:true},{propietario:"María",movimiento:3606.338,fecha: new Date('2023-09-15 20:28:49'),domiciliado:false},{propietario:"Juan",movimiento:-2562.021,fecha: new Date('2023-09-26 13:49:31'),domiciliado:true},{propietario:"Rosa",movimiento:157.895,fecha: new Date('2023-10-01 03:37:44'),domiciliado:false},{propietario:"Manuel",movimiento:-1385.965,fecha: new Date('2023-09-30 23:14:29'),domiciliado:true},{propietario:"Rosa",movimiento:1585.88,fecha: new Date('2023-10-26 10:18:46'),domiciliado:false},{propietario:"Sara",movimiento:-857.448,fecha: new Date('2023-10-05 01:02:56'),domiciliado:false},{propietario:"Rosa",movimiento:-4312.213,fecha: new Date('2023-10-29 18:28:34'),domiciliado:true},{propietario:"David",movimiento:819.906,fecha: new Date('2023-09-29 17:36:17'),domiciliado:true},{propietario:"Manuel",movimiento:4720.592,fecha: new Date('2023-10-17 23:11:40'),domiciliado:false},{propietario:"Isabel",movimiento:4107.076,fecha: new Date('2023-10-28 15:46:39'),domiciliado:false},{propietario:"Isabel",movimiento:-3718.397,fecha: new Date('2023-10-20 03:35:13'),domiciliado:false},{propietario:"Lucía",movimiento:-4408.093,fecha: new Date('2023-10-12 05:37:19'),domiciliado:true},{propietario:"Juan",movimiento:-2943.821,fecha: new Date('2023-09-05 03:24:04'),domiciliado:true},{propietario:"David",movimiento:3765.899,fecha: new Date('2023-09-19 11:52:11'),domiciliado:false},{propietario:"Pepe",movimiento:1288.503,fecha: new Date('2023-09-03 09:52:00'),domiciliado:false},{propietario:"María",movimiento:-2253.708,fecha: new Date('2023-10-07 09:58:08'),domiciliado:false},{propietario:"Rosa",movimiento:1388.919,fecha: new Date('2023-09-28 17:30:31'),domiciliado:true},{propietario:"Manuel",movimiento:4928.235,fecha: new Date('2023-09-17 11:25:09'),domiciliado:true},{propietario:"Rosa",movimiento:3539.176,fecha: new Date('2023-09-28 01:42:26'),domiciliado:true},{propietario:"Isabel",movimiento:-1075.14,fecha: new Date('2023-09-05 14:18:15'),domiciliado:false},{propietario:"David",movimiento:-3078.28,fecha: new Date('2023-09-12 23:16:29'),domiciliado:true},{propietario:"Lucía",movimiento:2081.478,fecha: new Date('2023-10-16 00:41:22'),domiciliado:false},{propietario:"Isabel",movimiento:-1179.365,fecha: new Date('2023-09-04 08:11:22'),domiciliado:true},{propietario:"Diego",movimiento:2939.893,fecha: new Date('2023-09-01 20:29:31'),domiciliado:false},{propietario:"Rosa",movimiento:-3750.075,fecha: new Date('2023-10-20 01:13:59'),domiciliado:false},{propietario:"David",movimiento:2021.387,fecha: new Date('2023-09-15 01:05:55'),domiciliado:false},{propietario:"Manuel",movimiento:-1606.089,fecha: new Date('2023-09-08 07:18:51'),domiciliado:false},{propietario:"Rosa",movimiento:3450.944,fecha: new Date('2023-10-23 06:14:17'),domiciliado:false},{propietario:"David",movimiento:3435.134,fecha: new Date('2023-09-10 05:06:51'),domiciliado:false},{propietario:"David",movimiento:-17.757,fecha: new Date('2023-10-11 04:30:02'),domiciliado:true},{propietario:"Sara",movimiento:2220.586,fecha: new Date('2023-10-06 02:50:14'),domiciliado:true},{propietario:"Sara",movimiento:-728.12,fecha: new Date('2023-10-27 06:42:31'),domiciliado:false},{propietario:"María",movimiento:-4922.174,fecha: new Date('2023-10-08 22:22:33'),domiciliado:false},{propietario:"Isabel",movimiento:-690.491,fecha: new Date('2023-10-03 04:02:36'),domiciliado:false},{propietario:"Pepe",movimiento:-1920.312,fecha: new Date('2023-09-10 11:03:52'),domiciliado:true},{propietario:"David",movimiento:4375.85,fecha: new Date('2023-10-26 13:38:23'),domiciliado:false},{propietario:"David",movimiento:-4084.284,fecha: new Date('2023-09-19 01:40:05'),domiciliado:false},{propietario:"Diego",movimiento:-3146.654,fecha: new Date('2023-10-21 21:34:35'),domiciliado:false},{propietario:"María",movimiento:3903.841,fecha: new Date('2023-10-16 00:34:57'),domiciliado:true},{propietario:"David",movimiento:4745.533,fecha: new Date('2023-10-17 22:43:44'),domiciliado:false},{propietario:"Sara",movimiento:-4279.337,fecha: new Date('2023-10-21 12:19:37'),domiciliado:true},{propietario:"Pepe",movimiento:-4088.948,fecha: new Date('2023-09-19 20:11:07'),domiciliado:true},{propietario:"Pepe",movimiento:-4846.49,fecha: new Date('2023-09-22 10:29:43'),domiciliado:true},{propietario:"Lucía",movimiento:3710.034,fecha: new Date('2023-09-09 22:03:45'),domiciliado:false},{propietario:"Sara",movimiento:210.307,fecha: new Date('2023-09-13 19:25:00'),domiciliado:true},{propietario:"María",movimiento:-2977.742,fecha: new Date('2023-09-08 02:22:04'),domiciliado:false},{propietario:"Isabel",movimiento:2806.706,fecha: new Date('2023-09-11 17:10:00'),domiciliado:true},{propietario:"Pepe",movimiento:-4993.136,fecha: new Date('2023-09-10 19:43:25'),domiciliado:false},{propietario:"Isabel",movimiento:-451.735,fecha: new Date('2023-09-28 18:03:21'),domiciliado:true},{propietario:"David",movimiento:1189.212,fecha: new Date('2023-09-10 15:33:23'),domiciliado:true},{propietario:"Diego",movimiento:-341.754,fecha: new Date('2023-09-24 12:42:21'),domiciliado:true}];

/** 
 * 
 * Apartado 1: filtrado y ordenación de datos
 * 
 * Nota: no puedes emplear variables adicionales
 * Nota 2: gastos -> movimiento < 0, ingresos -> movimiento > 0
 * Nota 3: emplea las funciones filter, toSorted, slice, map y reduce.
 **/

/**
 * Ejemplo: Obten todos los movimientos de Sara ordenados por fecha
 **/
const query1 = movimientos.filter(x => x.propietario === 'Sara').sort((l, r) => l.fecha - r.fecha);
console.log ("Movimientos de Sara por fecha:");
console.log(query1);

/**
 * Obten los *ingresos* de David ordenados por fecha
 **/
const query2 = movimientos.filter(x => x.propietario === 'David'  && x.movimiento>0).sort((l, r) => l.fecha - r.fecha);
console.log ("Ingresos de David por fecha:");
console.log(query2);

/**
 * Obten los gastos domiciliados de Diego en septiembre. 
 **/
const query3 = movimientos.filter(x => x.propietario === 'Diego' && x.movimiento<0 && x.domiciliado==true && x.fecha.getMonth()===8);
console.log ("Gastos domiciliados de Diego en septiembre:");
console.log(query3);


/**
 * Obten los 5 mayores gastos de Pepe, ordenados por gasto
 **/
const query4 = movimientos
                            .filter(x => x.propietario === 'Pepe' && x.movimiento < 0)  // Gastos de Pepe
                            .sort((a, b) => a.movimiento - b.movimiento)                // Ordenar de mayor a menor gasto
                            .slice(0, 5);               //cogemos índices 0 hasta el 4 -> 5 movimientos.
console.log ("5 mayores gastos de Pepe, por importe:");
console.log(query4);

/**
 * Obten los 5 mayores ingresos de Manuel ordenados, devuelve un array de números
 **/
const query5 = movimientos
                            .filter(x => x.propietario === 'Manuel' && x.movimiento > 0)  // Ingresos de Manuel
                            .sort((a, b) => b.movimiento - a.movimiento)                // Ordenar de mayor a menor ingresos
                            .slice(0, 5)                                               //cogemos índices 0 hasta el 4 -> 5 movimientos.        
                            .map(x =>x.movimiento);                            // Del array de objetos cogemos sólo los movimientos.
console.log(" 5 mayores ingresos de Manuel, sólo valores numéricos")
console.log(query5);

/**
 * Obten el balance de Isabel (ingresos - gastos)
 **/
const query6 = movimientos.filter(x => x.propietario === 'Isabel').reduce((balance, apunte) =>balance+apunte.movimiento, 0); 
console.log ("Balance de Isabel");
console.log(query6);


/**
 * Obten el total de ingresos de Lucía
 **/
const query7 = movimientos.filter(x => x.propietario === 'Lucía'&& x.movimiento>0).reduce((balance, apunte) =>balance+apunte.movimiento, 0); 
console.log ("Total de ingresos de Lucía");
console.log(query7);



/** 
 * 
 * Apartado 2: Creación de elementos.
 * 
 * Nota: Puedes emplear variables adicionales para comprobar si un elemento existe/no existe.
 * Nota 2: Comprueba con anterioridad que el usuario no exista realizando una búsqueda por nif
 * Nota 3: Emplea las funciones find/findIndex y unshift/push/splice
 **/
const usuarios = [{nombre: "Sibella",apellidos: "Briney O'Rourke",nif: "23645151U",telefono: "689277555"},{nombre: "Ethel",apellidos: "Rosette Lissi",nif: "05960289X",telefono: "676585979"},{nombre: "Cathie",apellidos: "Bibi Macey",nif: "13697388M",telefono: "659461611"},{nombre: "Emilia",apellidos: "Rozanna Alabaster",nif: "23545248W",telefono: "600847980"},{nombre: "Alisha",apellidos: "Toni Blase",nif: "31072976D",telefono: "665641161"},{nombre: "Angela",apellidos: "Jess MacIntosh",nif: "01442027C",telefono: "666804665"},{nombre: "Rosaline",apellidos: "Shanley Orlene",nif: "21498150A",telefono: "663124626"},{nombre: "Clo",apellidos: "Magdalen Glovsky",nif: "79815715B",telefono: "698071199"},{nombre: "Gale",apellidos: "Clarissa Lea",nif: "92200944X",telefono: "604338392"},{nombre: "Adore",apellidos: "Montgomery Niles",nif: "95301893D",telefono: "617416867"}];

/**
 * Crea un usuario y añádelo al principio.
 **/

const nuevoUsuario1 = {
    nombre: "Maisey",
    apellidos: "Kylander Etom",
    nif: "05617930J",
    telefono: "641152266"
};

usuarios.unshift(nuevoUsuario1); //al fin y al cabo es un array, aunque los elementos sean objetos.
// console.log ("Después de añadir Maisey al principio")
console.log(usuarios);  

const nuevoUsuario2 = {
    nombre: "Eolanda",
    apellidos: "Goerke Jammal",
    nif: "00976979U",
    telefono: "666432461"
};
console.log ("Ahora añadimos Eolanda al final")
usuarios.push(nuevoUsuario2);

console.log(usuarios);

/**
 * Crea un usuario y añádelo antes del usuario con nif 92200944X.
 **/
const nuevoUsuario3 = {
    nombre: "Ida",
    apellidos: "Pillsbury Billye",
    nif: "61866737N",
    telefono: "614038572"
}

let posicionInsercion = usuarios.findIndex(usuario => usuario.nif === "92200944X");
// console.log("posicion insercion ", posicionInsercion);
// Insertar nuevoUsuario3 en la posición anterior a la encontrada
if (posicionInsercion !== -1) {
    usuarios.splice(posicionInsercion, 0, nuevoUsuario3);
}

console.log(usuarios);

/**
 * Crea un usuario y añádelo después del usuario con nif 05960289X.
 **/
const nuevoUsuario4 = {
    nombre: "Nickie",
	apellidos: "Korey Mayeda",
	nif: "58710519Q",
	telefono: "693245571"
};

posicionInsercion = usuarios.findIndex(usuario => usuario.nif === "05960289X");
// console.log("posicion insercion ", posicionInsercion); -- LINEA TEST -> ELIMINAR
// Insertar nuevoUsuario4 en la posición siguiente a la encontrada
if (posicionInsercion !== -1) {
    posicionInsercion = posicionInsercion + 1;
    // console.log("posicion insercion ", posicionInsercion);  --LINEA TEST --> ELIMINAR
    usuarios.splice(posicionInsercion, 0, nuevoUsuario4);
}

console.log(usuarios);

/** 
 * 
 * Apartado 3: Modificación.
 * 
 * Nota: Puedes emplear variables adicionales para comprobar si un elemento existe/no existe.
 * Nota 2: Comprueba con anterioridad que el usuario exista
 * Nota 3: Emplea las funciones find
 **/

/**
 * Modifica el nif del usuario "Ethel Rosette Lissi" a 15960289Q
 **/

 
  // Nombre que queremos buscar para modificar su NIF
  let nombreUsuario = "Ethel";
  let apellidosUsuario="Rosette Lissi"
  let nifNuevo = "15960289Q";
  
  // Buscar si el usuario con el nombre dado existe
  let usuarioExistente = usuarios.find(usuario => (usuario.nombre === nombreUsuario && usuario.apellidos===apellidosUsuario)); //OJO con = , ===
  if (usuarioExistente) {
      // Si existe, modificar el NIF
      console.log("Usuario encontrado: ", usuarioExistente);
      usuarioExistente.nif = nifNuevo;
      console.log("NIF actualizado:", usuarioExistente.nombre, usuarioExistente.apellidos, usuarioExistente.nif);
  } else {
      // Si no existe, mostrar mensaje
      console.log(`El usuario "${nombreUsuario} ${apellidosUsuario}" no existe.`);
  }
  
  console.log(usuarios);

/**
 * Modifica el telefono del usuario con nif 92200944X a 666666666
 **/

  // NIF que queremos modificar
  const nifModificar = "92200944X";
  const telefonoNuevo = "666666666";
  console.log("Modificar el telefono del usuario con NIF: 92200944X");
  // Buscar si el usuario con el NIF antiguo existe
  usuarioExistente = usuarios.find(usuario => usuario.nif === nifModificar);
  
  if (usuarioExistente) {
      // Si existe usuario con ese NIF, modificar el Telefono
      console.log("Usuario encontrado: ", usuarioExistente);
      usuarioExistente.telefono = telefonoNuevo;
      console.log("se ha actualizado el telefono del usuario con nif: ", usuarioExistente.nif, "al número de Telefono ", usuarioExistente.telefono  );
      console.log("Telefono actualizado para: ", usuarioExistente.nombre, usuarioExistente.apellidos);
  } else {
      // Si no existe, mostrar mensaje
      console.log(`El usuario con el NIF ${nifAntiguo} no existe.`);
  }
  
console.log(usuarios);

/** 
 * 
 * Apartado 4: Modificación global.
 * 
 * Nota: No emplees bucles for/while.
 * Nota 2: Emplea la funcion forEach.
 * Nota 3: Emplea las variables que consideres.
 **/

/**
 * Añade un correo corporativo a los usuarios, este correo estará formado por:
 * las 3 primeras letras del nombre, las 3 del apellido seguido de @dwec.pmo
 **/
  
console.log("Añadir correo corporativo:");
usuarios.forEach(usuario => {
    let correo = usuario.nombre.slice(0, 3).toLowerCase() + 
                   usuario.apellidos.slice(0, 3).toLowerCase() + 
                  "@dwec.pmo";
   
    // Añadimos los correos a cada usuario
    usuario.correoEmpresa = correo;
  });
  
  console.log(usuarios);

/**
 * Calcula la letra correcta de los nif, para ello emplea las siguientes funciones
 **/
function calculaLetraNif(numero) { return "TRWAGMYFPDXBNJZSQVHLCKET".charAt(+numero % 23); } // devuelve la letra del nif para el número
function parteNif(nif) { return /(\d+)([A-Za-z])/.exec(nif).splice(1, 3); } // devuelve un array de dos elementos: [ numero, letra ]

console.log("Calcular letra correcta del NIF");

usuarios.forEach(usuario => {
    let [letraCalculada, numeroNif]= parteNif(usuario.nif);
    usuario.nif= letraCalculada + String(numeroNif);
    // console.log(usuario.nif);  --- LINEA PARA TESTS
})

console.log(usuarios);

/** 
 * 
 * Apartado 4: Borrado.
 * 
 * Nota: No emplees bucles for/while.
 * Nota 2: Comprueba con anterioridad que el usuario exista
 * Nota 3: Emplea las funciones findIndex y splice..
 **/

/**
 * Borra el usuario con nif 79815715B
 **/

// YA QUE QUEREMOS BORRAR NIF -> Comprobamos que existe el NIF Y MOSTRAMOS USUARIO PARA CONFIRMAR.

const nifBorrar = "79815715B";
let usuarioEliminar= usuarios.findIndex(usuarios => usuarios.nif===nifBorrar);
 
console.log("Eliminar usuario con NIF dado");
//console.log("posicion eliminar ", usuarioEliminar);   --- LINEA PARA TESTS  -- ELIMINAR.



if (usuarioEliminar !== -1) {                                             // Borramos el usuario si existe
    usuarios.splice(usuarioEliminar, 1);} 
else {                                                                     // Si no existe, mostrar mensaje
    console.log(`El usuario con el NIF ${nifBorrar} no existe.`);
} 

console.log(usuarios);

/**
 * Borra el usario Rosaline Shanley Orlene
 **/
// console.log(usuarios);

nombreUsuario = "Rosaline";
apellidosUsuario="Shanley Orlene"

// Buscar si el usuario con el nombre dado existe
let indiceUsuarioEliminar = usuarios.findIndex(usuario => (usuario.nombre === nombreUsuario && usuario.apellidos===apellidosUsuario)); //OJO con = , ===

if (indiceUsuarioEliminar !== -1) {                 // Verificamos si el usuario existe
    usuarios.splice(indiceUsuarioEliminar, 1);      // Si el usuario existe, lo eliminamos con splice
    //console.log(`El usuario "${nombreUsuario} ${apellidosUsuario}" ha sido eliminado.`);   // ¿Diferencias? entre estas formas de sacar datos --> VER
    console.log("El usuario ", nombreUsuario,    apellidosUsuario, " ha sido eliminado.");
} else {
    // Si no existe, mostramos un mensaje
    console.log(`El usuario "${nombreUsuario} ${apellidosUsuario}" no existe.`);
}

console.log(usuarios);