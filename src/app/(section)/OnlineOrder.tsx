"use client"
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const OnlineOrder = ({ }) => {
  const { scrollYProgress } = useViewportScroll()
  const sm = useMediaQuery({ maxWidth: 767 });
  const pathLength = useTransform(scrollYProgress, [0.29, 0.335], [0, 1]);
  return (
    <section id="online-order" className=" relative flex w-full min-h-[600px] md:min-h-screen h-1 items-center justify-center">
      <div className="z-10 flex w-full md:w-3/5 h-full flex-col gap-8 p-8 md:p-28 items-center md:items-start justify-start md:justify-center font-jakarta tracking-widest text-white">
        <p className="text-xs md:text-lg text-yellow uppercase">
          Online Order
        </p>
        <div className="hidden md:flex flex-col gap-8 text-xl font-thin sm:text-3xl md:text-5xl lg:text-6xl tracking-widest leading-tight uppercase">
          <p>Fresh South </p>
          <p>Indian Flavors </p>
          <p>Delivered!</p>
        </div>
        <div className="md:hidden text-center text-xl font-thin tracking-widest leading-normal md:leading-tight uppercase">
          <p>Fresh South Indian Flavors Delivered!</p>
        </div>
        <p className="text-sm md:text-lg w-full md:w-3/5 text-center md:text-start">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
        </p>
        <Button
          className="group items-center gap-[1.19rem] bg-transparent border border-white hover:bg-primary"
          variant="secondary"
          asChild
        >
          <Link href="/menu" className="group flex items-center space-x-2">
            <p className="text-white group-hover:text-black duration-300">Order Online</p>
            <Icons.rightArrow className="text-yellow group-hover:text-black duration-300 ease-in-out transform group-hover:translate-x-1" />
          </Link>
        </Button>

      </div>
      <div className="hidden md:flex w-2/5 h-full justify-center items-center relative">
        <Image
          src="/images/landing-page/order-2.png"
          alt="order"
          width={500}
          height={500}
          className="w-1/2 h-2/5 pb-28"
        />
      </div>
      <div className="flex items-end justify-end absolute w-full h-1/2 bottom-0 -mb-40 md:-mb-10 md:h-full">
        <motion.svg
          width={sm ? "1311" : "1859"}
          height={sm ? "496" : "503"} fill="none"
          viewBox={sm ? "0 0 1311 496" : "0 0 1859 503"}
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            style={{ pathLength }}
            d={sm ? "M0.0972938 494.514C37.0973 493.513 104.597 477.017 134.597 466.516C164.597 456.014 228.597 441.014 270.597 447.014C312.597 453.014 410.597 490.017 449.097 487.016C487.597 484.014 509.597 490.514 534.597 459.014C559.597 427.514 536.597 400.016 522.097 391.515C507.597 383.013 468.097 368.517 449.097 415.016C430.097 461.514 455.597 474.886 472.597 485.899C489.597 496.912 532.097 491.514 542.097 481.514C552.097 471.514 570.097 456.514 561.097 421.014C552.097 385.514 480.597 359.015 480.597 359.015C480.597 359.015 420.597 330.764 419.097 330.015C417.597 329.265 413.479 331.515 414.597 333.515C417.211 338.189 425.097 344.515 430.097 344.515C435.097 344.514 443.097 326.015 473.097 316.015C503.097 306.015 536.597 325.515 550.597 335.015C557.899 339.969 576.008 353.435 585.097 369.015C597.097 386.515 593.097 399.015 588.597 400.015C584.098 401.015 580.097 386.015 578.597 380.015C577.861 377.067 569.597 359.015 572.597 340.515C575.597 322.015 573.917 334.151 580.097 302.015C586.277 269.878 596.597 258.714 600.097 261.514C603.597 264.314 601.597 267.014 599.097 270.514C596.597 274.014 582.922 275.016 575.597 265.515C568.272 256.014 572.097 252.514 567.597 249.515C563.097 246.515 526.597 261.515 522.097 254.014C517.597 246.514 523.097 205.515 529.097 202.014C535.097 198.514 558.097 228.515 563.097 225.514C568.097 222.514 567.097 210.514 562.097 205.014C557.097 199.515 545.597 185.514 544.097 177.514C542.597 169.515 544.097 163.514 550.097 159.014C556.097 154.514 572.097 155.514 575.597 160.014C579.097 164.514 578.597 168.515 575.597 177.514C572.597 186.514 564.597 190.014 566.097 195.014C567.597 200.014 579.472 207.514 580.597 212.014C581.722 216.514 558.597 283.514 558.597 283.514C558.597 283.514 535.097 332.515 536.597 352.515C538.097 372.514 563.097 400.016 563.097 400.016C563.097 400.016 578.097 422.014 592.597 430.514C607.097 439.014 753.097 440.514 753.097 440.514C753.097 440.514 750.597 429.014 752.097 422.514C753.597 416.014 753.597 409.514 762.597 401.514C771.597 393.514 861.097 364.014 874.597 348.514C888.097 333.014 823.597 324.489 796.097 331.014C768.597 337.54 750.097 336.014 736.097 356.514C722.097 377.014 729.597 400.016 729.597 400.016C729.597 400.016 722.782 387.867 716.597 373.014C711.427 360.599 706.919 345.844 705.097 339.014C701.097 324.014 699.097 313.514 688.097 304.014C677.097 294.514 656.097 292.514 658.597 305.514C659.984 312.725 676.141 337.631 691.097 360.514C703.103 378.883 714.597 394.014 712.597 401.514C710.597 409.014 681.097 411.193 669.597 412.014C658.097 412.836 629.097 413.514 633.597 406.014C638.097 398.514 681.597 387.515 691.097 389.014C700.597 390.514 699.097 393.014 689.597 395.515C680.097 398.015 666.597 398.014 656.097 384.514C645.597 371.014 603.597 281.515 607.097 265.515C610.597 249.515 620.597 245.015 630.597 242.515C640.597 240.014 691.597 233.015 699.097 235.514C706.597 238.014 696.097 241.514 688.097 243.514C680.097 245.514 676.097 240.015 675.097 231.514C674.097 223.014 674.461 171.014 676.279 160.014C678.097 149.014 690.097 181.014 691.597 198.514C693.097 216.014 673.097 223.014 663.597 230.014C654.097 237.014 636.597 247.014 615.597 237.014C594.597 227.014 607.097 225.514 610.597 226.014C614.097 226.514 620.097 229.014 613.097 237.014C606.097 245.014 591.097 249.514 579.597 244.514C568.097 239.514 575.097 228.014 585.597 221.514C596.097 215.014 616.597 219.014 628.097 213.514C639.597 208.014 649.597 211.014 649.597 195.014C649.597 179.014 615.597 114.514 613.597 100.514C611.597 86.5144 620.597 89.0145 625.597 97.014C630.597 105.014 633.232 114.514 620.732 120.514C608.232 126.514 590.597 129.181 585.597 127.514C580.597 125.848 594.597 116.014 592.097 111.014C589.597 106.014 557.097 108.014 553.097 100.514C549.097 93.014 575.597 78.014 568.597 64.514C561.597 51.014 517.097 39.5144 512.097 29.5142C507.097 19.514 531.597 25.514 537.097 26.514C542.597 27.514 566.097 34.0142 566.097 34.0142C566.097 34.0142 572.097 21.514 583.597 13.514C595.097 5.51403 608.097 2.01413 618.097 1.51413C628.097 1.01414 653.831 8.01396 668.097 26.514C682.364 45.0141 679.461 70.5138 676.279 85.514C673.097 100.514 670.097 106.515 658.597 118.514C647.097 130.514 627.097 134.514 626.097 132.014C625.097 129.514 626.597 128.314 638.597 123.514C645.429 120.782 654.292 117.318 672.597 127.514C686.447 135.229 709.475 155.038 719.597 164.514C743.097 186.514 763.597 206.015 773.597 225.514C783.597 245.014 731.597 267.515 712.597 270.514C693.597 273.514 664.597 276.014 663.597 271.514C662.597 267.014 694.097 261.514 716.597 257.014C739.097 252.514 776.097 247.514 787.097 255.014C798.097 262.514 765.597 280.014 775.097 282.014C784.597 284.014 802.097 279.014 802.097 279.014C802.097 279.014 960.597 257.014 963.097 268.014C965.597 279.014 826.597 292.115 809.097 284.514C791.597 276.913 795.097 244.514 802.097 228.514C809.097 212.514 823.597 198.514 832.097 192.514C840.597 186.514 949.597 195.014 953.597 183.014C957.597 171.014 940.597 159.514 928.597 153.014C916.597 146.514 882.597 148.514 872.097 138.514C861.597 128.514 876.597 122.514 883.097 130.514C889.597 138.514 889.597 143.514 881.097 146.514C872.597 149.514 845.097 147.014 830.097 161.514C815.097 176.014 813.197 195.014 818.097 202.014C822.998 209.015 919.097 192.514 936.597 195.514C954.097 198.514 920.097 203.514 920.097 203.514C920.097 203.514 802.097 221.014 793.097 211.514C784.097 202.014 785.997 153.014 791.597 125.014C797.197 97.0141 965.597 97.0141 971.097 107.514C976.597 118.014 993.097 270.514 988.097 282.014C983.097 293.514 865.597 295.514 839.097 300.014C812.597 304.514 770.138 291.014 770.138 300.014C770.138 304.389 753.351 303.663 736.097 304.014C717.858 304.386 699.097 305.612 699.097 302.015C699.097 298.451 717.766 297.879 736.097 297.514C753.778 297.163 771.145 298.088 771.145 302.015C771.145 303.987 794.834 300.856 820.097 304.014C845.127 307.143 871.665 316.542 886.097 322.514C915.097 334.514 930.597 357.014 930.597 357.014C930.597 357.014 906.597 360.015 900.097 366.514C893.597 373.014 890.597 420.514 872.097 449.514C853.597 478.514 814.097 458.014 804.597 442.514C795.097 427.014 823.097 415.016 823.097 415.016C823.097 415.016 861.097 395.448 883.597 403.514C906.097 411.58 896.097 462.514 877.097 477.514C858.097 492.514 824.597 501.014 796.597 475.514C768.597 450.014 772.597 426.517 787.097 415.016C801.597 403.514 920.097 371.515 950.597 369.014C981.097 366.514 1067.6 337.515 1111.1 330.015C1154.6 322.514 1257.6 353.014 1310.1 368.014"
              : "M0.57466 398.033C0.57466 398.033 38.0973 462.032 92.5973 488.532C147.097 515.032 223.097 493.032 241.097 492.032C249.988 491.539 330.627 480.768 429.597 486.032C476.597 488.532 511.097 494.532 548.097 493.531C585.097 492.53 652.597 476.034 682.597 465.532C712.597 455.031 776.597 440.031 818.597 446.031C860.597 452.031 958.597 489.034 997.097 486.032C1035.6 483.031 1057.6 489.531 1082.6 458.031C1107.6 426.531 1084.6 399.033 1070.1 390.531C1055.6 382.03 1016.1 367.534 997.097 414.032C978.097 460.531 1003.6 473.902 1020.6 484.916C1037.6 495.929 1080.1 490.531 1090.1 480.531C1100.1 470.531 1118.1 455.531 1109.1 420.031C1100.1 384.531 1028.6 358.031 1028.6 358.031C1028.6 358.031 968.597 329.781 967.097 329.031C965.597 328.282 961.479 330.531 962.597 332.531C965.211 337.206 973.097 343.532 978.097 343.531C983.097 343.531 991.097 325.031 1021.1 315.031C1051.1 305.031 1084.6 324.531 1098.6 334.031C1105.9 338.986 1124.01 352.451 1133.1 368.031C1145.1 385.531 1141.1 398.031 1136.6 399.031C1132.1 400.031 1128.1 385.032 1126.6 379.031C1125.86 376.084 1117.6 358.031 1120.6 339.531C1123.6 321.031 1121.92 333.168 1128.1 301.031C1134.28 268.895 1144.6 257.731 1148.1 260.531C1151.6 263.331 1149.6 266.031 1147.1 269.531C1144.6 273.031 1130.92 274.033 1123.6 264.532C1116.27 255.031 1120.1 251.531 1115.6 248.532C1111.1 245.532 1074.6 260.532 1070.1 253.031C1065.6 245.531 1071.1 204.532 1077.1 201.031C1083.1 197.531 1106.1 227.532 1111.1 224.531C1116.1 221.531 1115.1 209.531 1110.1 204.031C1105.1 198.532 1093.6 184.531 1092.1 176.531C1090.6 168.531 1092.1 162.531 1098.1 158.031C1104.1 153.531 1120.1 154.531 1123.6 159.031C1127.1 163.531 1126.6 167.532 1123.6 176.531C1120.6 185.531 1112.6 189.031 1114.1 194.031C1115.6 199.031 1127.47 206.531 1128.6 211.031C1129.72 215.531 1106.6 282.531 1106.6 282.531C1106.6 282.531 1083.1 331.532 1084.6 351.531C1086.1 371.531 1111.1 399.033 1111.1 399.033C1111.1 399.033 1126.1 421.031 1140.6 429.531C1155.1 438.031 1301.1 439.531 1301.1 439.531C1301.1 439.531 1298.6 428.031 1300.1 421.531C1301.6 415.031 1301.6 408.531 1310.6 400.531C1319.6 392.531 1409.1 363.031 1422.6 347.531C1436.1 332.031 1371.6 323.506 1344.1 330.031C1316.6 336.556 1298.1 335.031 1284.1 355.531C1270.1 376.031 1277.6 399.033 1277.6 399.033C1277.6 399.033 1270.78 386.884 1264.6 372.031C1259.43 359.616 1254.92 344.86 1253.1 338.031C1249.1 323.031 1247.1 312.531 1236.1 303.031C1225.1 293.531 1204.1 291.531 1206.6 304.531C1207.98 311.742 1224.14 336.648 1239.1 359.531C1251.1 377.9 1262.6 393.031 1260.6 400.531C1258.6 408.031 1229.1 410.21 1217.6 411.031C1206.1 411.852 1177.1 412.531 1181.6 405.031C1186.1 397.531 1229.6 386.531 1239.1 388.031C1248.6 389.531 1247.1 392.031 1237.6 394.531C1228.1 397.032 1214.6 397.031 1204.1 383.531C1193.6 370.031 1151.6 280.532 1155.1 264.532C1158.6 248.532 1168.6 244.032 1178.6 241.531C1188.6 239.031 1239.6 232.032 1247.1 234.531C1254.6 237.031 1244.1 240.531 1236.1 242.531C1228.1 244.531 1224.1 239.031 1223.1 230.531C1222.1 222.031 1222.46 170.031 1224.28 159.031C1226.1 148.031 1238.1 180.031 1239.6 197.531C1241.1 215.031 1221.1 222.031 1211.6 229.031C1202.1 236.031 1184.6 246.031 1163.6 236.031C1142.6 226.031 1155.1 224.531 1158.6 225.031C1162.1 225.531 1168.1 228.031 1161.1 236.031C1154.1 244.031 1139.1 248.531 1127.6 243.531C1116.1 238.531 1123.1 227.031 1133.6 220.531C1144.1 214.031 1164.6 218.031 1176.1 212.531C1187.6 207.031 1197.6 210.031 1197.6 194.031C1197.6 178.031 1163.6 113.531 1161.6 99.531C1159.6 85.5312 1168.6 88.0313 1173.6 96.0309C1178.6 104.03 1181.23 113.531 1168.73 119.531C1156.23 125.53 1138.6 128.197 1133.6 126.531C1128.6 124.864 1142.6 115.031 1140.1 110.031C1137.6 105.031 1105.1 107.031 1101.1 99.531C1097.1 92.0309 1123.6 77.0309 1116.6 63.5309C1109.6 50.0309 1065.1 38.5312 1060.1 28.5311C1055.1 18.5309 1079.6 24.5309 1085.1 25.5309C1090.6 26.5309 1114.1 33.031 1114.1 33.031C1114.1 33.031 1120.1 20.5309 1131.6 12.5309C1143.1 4.53087 1156.1 1.03097 1166.1 0.530967C1176.1 0.0309695 1201.83 7.0308 1216.1 25.5309C1230.36 44.0309 1227.46 69.5307 1224.28 84.5309C1221.1 99.531 1218.1 105.532 1206.6 117.531C1195.1 129.531 1175.1 133.531 1174.1 131.031C1173.1 128.531 1174.6 127.331 1186.6 122.531C1193.43 119.798 1202.29 116.335 1220.6 126.531C1234.45 134.245 1257.48 154.055 1267.6 163.531C1291.1 185.531 1311.6 205.032 1321.6 224.531C1331.6 244.031 1279.6 266.532 1260.6 269.531C1241.6 272.531 1212.6 275.031 1211.6 270.531C1210.6 266.031 1242.1 260.531 1264.6 256.031C1287.1 251.531 1324.1 246.531 1335.1 254.031C1346.1 261.531 1313.6 279.031 1323.1 281.031C1332.6 283.031 1350.1 278.031 1350.1 278.031C1350.1 278.031 1508.6 256.031 1511.1 267.031C1513.6 278.031 1374.6 291.132 1357.1 283.531C1339.6 275.93 1343.1 243.531 1350.1 227.531C1357.1 211.531 1371.6 197.531 1380.1 191.531C1388.6 185.531 1497.6 194.031 1501.6 182.031C1505.6 170.031 1488.6 158.531 1476.6 152.031C1464.6 145.531 1430.6 147.531 1420.1 137.531C1409.6 127.531 1424.6 121.531 1431.1 129.531C1437.6 137.531 1437.6 142.531 1429.1 145.531C1420.6 148.531 1393.1 146.031 1378.1 160.531C1363.1 175.031 1361.2 194.031 1366.1 201.031C1371 208.032 1467.1 191.531 1484.6 194.531C1502.1 197.531 1468.1 202.531 1468.1 202.531C1468.1 202.531 1350.1 220.031 1341.1 210.531C1332.1 201.031 1334 152.031 1339.6 124.031C1345.2 96.0309 1513.6 96.0309 1519.1 106.531C1524.6 117.031 1541.1 269.531 1536.1 281.031C1531.1 292.531 1413.6 294.531 1387.1 299.031C1360.6 303.531 1318.14 290.031 1318.14 299.031C1318.14 303.406 1301.35 302.68 1284.1 303.031C1265.86 303.402 1247.1 304.629 1247.1 301.031C1247.1 297.468 1265.77 296.895 1284.1 296.531C1301.78 296.179 1319.15 297.105 1319.15 301.031C1319.15 303.004 1342.83 299.873 1368.1 303.031C1393.13 306.16 1419.66 315.559 1434.1 321.531C1463.1 333.531 1478.6 356.031 1478.6 356.031C1478.6 356.031 1454.6 359.031 1448.1 365.531C1441.6 372.031 1438.6 419.531 1420.1 448.531C1401.6 477.531 1362.1 457.031 1352.6 441.531C1343.1 426.031 1371.1 414.032 1371.1 414.032C1371.1 414.032 1409.1 394.465 1431.6 402.531C1454.1 410.597 1444.1 461.531 1425.1 476.531C1406.1 491.531 1372.6 500.031 1344.6 474.531C1316.6 449.031 1320.6 425.534 1335.1 414.032C1349.6 402.531 1468.1 370.532 1498.6 368.031C1529.1 365.531 1615.6 336.532 1659.1 329.031C1702.6 321.531 1805.6 352.031 1858.1 367.031"}
            strokeWidth={2}
            stroke="url(#paint0_linear_200_57)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_200_57"
              x1="-3.69985"
              y1="303.612"
              x2="2470.3"
              y2="191.612"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C99A3D" stop-opacity="0" />
              <stop offset="0.152449" stop-color="#634C1E" />
              <stop offset="0.688875" stop-color="#634C1E" />
              <stop offset="0.757408" stop-color="#C99A3D" stop-opacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  );
};

export default OnlineOrder;