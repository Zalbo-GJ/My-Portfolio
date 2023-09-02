import "./App.css";
import Footer from "./components/footer";
import { usePageStyle } from "./darkMode";
import ContactMe from "./pages/contact";
import Hero from "./pages/hero";
import MyProjects from "./pages/my_projects";
import MyServices from "./pages/my_services";
import Testimonials from "./pages/testimonials";
import { useEffect } from "react";
import NavBar from "./components/nav_bar";

function App() {
  const pageStyle = usePageStyle();

  useEffect(() => {
    const handleNavigation = (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id "${id}" not found.`);
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", handleNavigation);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleNavigation);
      });
    };
  }, []);

  return (
    <div className="App" style={pageStyle}>
      <div
        className="main-background"
        style={{ position: "absolute", width: "100vw", zIndex: "-100" }}
      >
        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 1440 4377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            </filter>
          </defs>
          <g filter="url(#blurFilter)">
            <g clip-path="url(#clip0_247_52)">
              <rect width="1440" height="4435" fill="white" />
              <g filter="url(#filter0_b_247_52)">
                <ellipse
                  cx="41"
                  cy="174"
                  rx="56"
                  ry="52"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter1_b_247_52)">
                <ellipse
                  cx="1339.5"
                  cy="222"
                  rx="381.5"
                  ry="314"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M1720.5 222C1720.5 395.055 1550.02 535.5 1339.5 535.5C1128.98 535.5 958.5 395.055 958.5 222C958.5 48.9454 1128.98 -91.5 1339.5 -91.5C1550.02 -91.5 1720.5 48.9454 1720.5 222Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter2_b_247_52)">
                <ellipse
                  cx="622"
                  cy="706"
                  rx="122"
                  ry="120"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M743.5 706C743.5 771.99 689.11 825.5 622 825.5C554.89 825.5 500.5 771.99 500.5 706C500.5 640.01 554.89 586.5 622 586.5C689.11 586.5 743.5 640.01 743.5 706Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter3_b_247_52)">
                <ellipse
                  cx="299"
                  cy="331.5"
                  rx="115"
                  ry="105.5"
                  fill="#FF1100"
                  fill-opacity="0.05"
                />
              </g>
              <g filter="url(#filter4_b_247_52)">
                <ellipse
                  cx="1055"
                  cy="331.5"
                  rx="109"
                  ry="98.5"
                  fill="#0040FF"
                  fill-opacity="0.1"
                />
                <path
                  d="M1163.5 331.5C1163.5 385.577 1114.97 429.5 1055 429.5C995.028 429.5 946.5 385.577 946.5 331.5C946.5 277.423 995.028 233.5 1055 233.5C1114.97 233.5 1163.5 277.423 1163.5 331.5Z"
                  stroke="#0040FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter5_b_247_52)">
                <ellipse
                  cx="26.5"
                  cy="727"
                  rx="279.5"
                  ry="261"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter6_b_247_52)">
                <ellipse
                  cx="452.34"
                  cy="1129.39"
                  rx="56"
                  ry="52"
                  transform="rotate(-45.5 452.34 1129.39)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter7_b_247_52)">
                <ellipse
                  cx="1136.78"
                  cy="1105.15"
                  rx="196"
                  ry="166"
                  transform="rotate(-45.5 1136.78 1105.15)"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M1273.81 965.708C1338.95 1029.72 1330.56 1144.08 1254.82 1221.15C1179.09 1298.22 1064.89 1308.6 999.75 1244.59C934.61 1180.58 943 1066.22 1018.73 989.147C1094.47 912.079 1208.67 901.695 1273.81 965.708Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter8_b_247_52)">
                <ellipse
                  cx="13.7299"
                  cy="2624.89"
                  rx="56"
                  ry="52"
                  transform="rotate(-101 13.7299 2624.89)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter9_b_247_52)">
                <ellipse
                  cx="1263.02"
                  cy="3079.41"
                  rx="381.5"
                  ry="314"
                  transform="rotate(-101 1263.02 3079.41)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M1190.33 2705.4C1360.2 2672.38 1530.6 2812.94 1570.76 3019.59C1610.93 3226.23 1505.6 3420.38 1335.72 3453.4C1165.85 3486.43 995.453 3345.87 955.285 3139.22C915.116 2932.58 1020.45 2738.43 1190.33 2705.4Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter10_b_247_52)">
                <ellipse
                  cx="374.411"
                  cy="2452.25"
                  rx="160"
                  ry="142.5"
                  transform="rotate(-101 374.411 2452.25)"
                  fill="#FF1100"
                  fill-opacity="0.05"
                />
              </g>
              <g filter="url(#filter11_b_247_52)">
                <ellipse
                  cx="37.9791"
                  cy="3589.56"
                  rx="358"
                  ry="399"
                  transform="rotate(-101 37.9791 3589.56)"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter12_b_247_52)">
                <ellipse
                  cx="1117.72"
                  cy="1871.52"
                  rx="276"
                  ry="292"
                  transform="rotate(-45.5 1117.72 1871.52)"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter13_b_247_52)">
                <ellipse
                  cx="-36.8977"
                  cy="1580.86"
                  rx="381.5"
                  ry="314"
                  transform="rotate(67 -36.8977 1580.86)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M111.971 1931.57C-47.3267 1999.19 -243.221 1897.14 -325.476 1703.36C-407.731 1509.58 -345.064 1297.77 -185.766 1230.15C-26.4687 1162.53 169.425 1264.59 251.681 1458.37C333.936 1652.15 271.268 1863.96 111.971 1931.57Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter14_b_247_52)">
                <ellipse
                  cx="608.015"
                  cy="2879.49"
                  rx="162.808"
                  ry="166"
                  transform="rotate(-101 608.015 2879.49)"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M577.045 2720.17C666.778 2702.72 753.372 2759.93 770.475 2847.91C787.577 2935.9 728.718 3021.37 638.985 3038.82C549.252 3056.26 462.658 2999.05 445.556 2911.07C428.454 2823.09 487.313 2737.61 577.045 2720.17Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter15_b_247_52)">
                <ellipse
                  cx="643.34"
                  cy="4312.39"
                  rx="56"
                  ry="52"
                  transform="rotate(-45.5 643.34 4312.39)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter16_b_247_52)">
                <ellipse
                  cx="1311.8"
                  cy="4016.63"
                  rx="249.301"
                  ry="314"
                  transform="rotate(-101 1311.8 4016.63)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M1264.33 3772.4C1434.4 3739.35 1593.34 3822.03 1619.54 3956.82C1645.74 4091.6 1529.35 4227.81 1359.27 4260.86C1189.2 4293.92 1030.26 4211.24 1004.06 4076.45C977.86 3941.67 1094.25 3805.46 1264.33 3772.4Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter17_b_247_52)">
                <rect
                  width="1440"
                  height="4448"
                  transform="translate(0 -13)"
                  fill="#DEDEDE"
                  fill-opacity="0.14"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_247_52"
                x="-55"
                y="82"
                width="192"
                height="184"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_247_52"
                x="918"
                y="-132"
                width="843"
                height="708"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_247_52"
                x="460"
                y="546"
                width="324"
                height="320"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_b_247_52"
                x="144"
                y="186"
                width="310"
                height="291"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_b_247_52"
                x="906"
                y="193"
                width="298"
                height="277"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_b_247_52"
                x="-293"
                y="426"
                width="639"
                height="602"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_b_247_52"
                x="358.338"
                y="1035.32"
                width="188.005"
                height="188.145"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_b_247_52"
                x="915.415"
                y="883.262"
                width="442.725"
                height="443.772"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_b_247_52"
                x="-78.4316"
                y="2529.02"
                width="184.323"
                height="191.738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_b_247_52"
                x="906.243"
                y="2660.1"
                width="713.563"
                height="838.619"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter10_b_247_52"
                x="191.207"
                y="2252.83"
                width="366.41"
                height="398.845"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter11_b_247_52"
                x="-399.668"
                y="3189.91"
                width="875.294"
                height="799.3"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter12_b_247_52"
                x="793.467"
                y="1547.55"
                width="648.507"
                height="647.947"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter13_b_247_52"
                x="-402.178"
                y="1168.77"
                width="730.562"
                height="824.178"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter14_b_247_52"
                x="402.1"
                y="2676.53"
                width="411.83"
                height="405.913"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter15_b_247_52"
                x="549.338"
                y="4218.32"
                width="188.005"
                height="188.145"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter16_b_247_52"
                x="959.876"
                y="3724.63"
                width="703.848"
                height="584.014"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <filter
                id="filter17_b_247_52"
                x="-40"
                y="-53"
                width="1520"
                height="4528"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_247_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_247_52"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_247_52">
                <rect width="1440" height="4435" fill="white" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </div>

      <div
        className="tab-background"
        style={{ position: "absolute", width: "100vw", zIndex: "-100" }}
      >
        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 700 2554"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            </filter>
          </defs>
          <g filter="url(#blurFilter)">
            <g clip-path="url(#clip0_360_35)">
              <rect width="100vw" height="100%" fill="white" />
              <g filter="url(#filter0_b_360_35)">
                <ellipse
                  cx="41"
                  cy="174"
                  rx="56"
                  ry="52"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter1_b_360_35)">
                <ellipse
                  cx="438"
                  cy="46.5"
                  rx="202"
                  ry="185.5"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M639.5 46.5C639.5 148.633 549.326 231.5 438 231.5C326.674 231.5 236.5 148.633 236.5 46.5C236.5 -55.6334 326.674 -138.5 438 -138.5C549.326 -138.5 639.5 -55.6334 639.5 46.5Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter2_b_360_35)">
                <ellipse
                  cx="263.5"
                  cy="1046"
                  rx="137.5"
                  ry="136"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M400.5 1046C400.5 1120.83 339.168 1181.5 263.5 1181.5C187.832 1181.5 126.5 1120.83 126.5 1046C126.5 971.171 187.832 910.5 263.5 910.5C339.168 910.5 400.5 971.171 400.5 1046Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter3_b_360_35)">
                <ellipse
                  cx="177.5"
                  cy="338"
                  rx="36.5"
                  ry="32"
                  fill="#FF1100"
                  fill-opacity="0.05"
                />
              </g>
              <g filter="url(#filter4_b_360_35)">
                <ellipse
                  cx="438.5"
                  cy="545.5"
                  rx="116.5"
                  ry="117.5"
                  fill="#0040FF"
                  fill-opacity="0.1"
                />
                <path
                  d="M554.5 545.5C554.5 610.121 502.561 662.5 438.5 662.5C374.439 662.5 322.5 610.121 322.5 545.5C322.5 480.879 374.439 428.5 438.5 428.5C502.561 428.5 554.5 480.879 554.5 545.5Z"
                  stroke="#0040FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter5_b_360_35)">
                <ellipse
                  cx="-44"
                  cy="640"
                  rx="209"
                  ry="174"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter6_b_360_35)">
                <ellipse
                  cx="398.34"
                  cy="1310.39"
                  rx="56"
                  ry="52"
                  transform="rotate(-45.5 398.34 1310.39)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter7_b_360_35)">
                <ellipse
                  cx="7.72992"
                  cy="2230.89"
                  rx="56"
                  ry="52"
                  transform="rotate(-101 7.72992 2230.89)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter8_b_360_35)">
                <ellipse
                  cx="170.412"
                  cy="2723.25"
                  rx="160"
                  ry="142.5"
                  transform="rotate(-101 170.412 2723.25)"
                  fill="#FF1100"
                  fill-opacity="0.05"
                />
              </g>
              <g filter="url(#filter9_b_360_35)">
                <ellipse
                  cx="579.72"
                  cy="2043.52"
                  rx="276"
                  ry="292"
                  transform="rotate(-45.5 579.72 2043.52)"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter10_b_360_35)">
                <ellipse
                  cx="-71.4249"
                  cy="1572.15"
                  rx="326.405"
                  ry="314"
                  transform="rotate(67 -71.4249 1572.15)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M55.9162 1872.14C-103.444 1939.79 -289.667 1860.34 -360.003 1694.64C-430.339 1528.94 -358.127 1339.79 -198.766 1272.15C-39.4053 1204.51 146.818 1283.95 217.153 1449.65C287.489 1615.35 215.277 1804.5 55.9162 1872.14Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter11_b_360_35)">
                <ellipse
                  cx="-63.2222"
                  cy="2398.15"
                  rx="196"
                  ry="166"
                  transform="rotate(-45.5 -63.2222 2398.15)"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M73.8055 2258.71C138.946 2322.72 130.556 2437.08 54.8207 2514.15C-20.9145 2591.22 -135.11 2601.6 -200.25 2537.59C-265.39 2473.58 -257 2359.22 -181.265 2282.15C-105.53 2205.08 8.66544 2194.69 73.8055 2258.71Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter12_b_360_35)">
                <ellipse
                  cx="609.691"
                  cy="2907.86"
                  rx="234.641"
                  ry="228.111"
                  transform="rotate(-101 609.691 2907.86)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M565.015 2678.02C688.399 2654.03 808.444 2737.48 833.12 2864.42C857.797 2991.37 777.751 3113.71 654.367 3137.69C530.984 3161.68 410.939 3078.24 386.262 2951.29C361.586 2824.34 441.632 2702 565.015 2678.02Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter13_b_360_35)">
                <rect
                  width="700"
                  height="3213"
                  fill="#DEDEDE"
                  fill-opacity="0.14"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_360_35"
                x="-55"
                y="82"
                width="192"
                height="184"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_360_35"
                x="196"
                y="-179"
                width="484"
                height="451"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_360_35"
                x="86"
                y="870"
                width="355"
                height="352"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_b_360_35"
                x="101"
                y="266"
                width="153"
                height="144"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_b_360_35"
                x="282"
                y="388"
                width="313"
                height="315"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_b_360_35"
                x="-293"
                y="426"
                width="498"
                height="428"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_b_360_35"
                x="304.338"
                y="1216.32"
                width="188.004"
                height="188.145"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_b_360_35"
                x="-84.4316"
                y="2135.02"
                width="184.323"
                height="191.738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_b_360_35"
                x="-12.7935"
                y="2523.83"
                width="366.41"
                height="398.845"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_b_360_35"
                x="255.467"
                y="1719.55"
                width="648.507"
                height="647.947"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter10_b_360_35"
                x="-427.43"
                y="1207.52"
                width="712.009"
                height="729.254"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter11_b_360_35"
                x="-284.584"
                y="2176.26"
                width="442.725"
                height="443.772"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter12_b_360_35"
                x="341.295"
                y="2633.41"
                width="536.792"
                height="548.897"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter13_b_360_35"
                x="-40"
                y="-40"
                width="780"
                height="3293"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_360_35">
                <rect width="100vw" height="100%" fill="white" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </div>
      <div
        className="mobile-background"
        style={{ position: "absolute", width: "100vw", zIndex: "-100" }}
      >
        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 430 2554"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            </filter>
          </defs>
          <g filter="url(#blurFilter)">
            <g clip-path="url(#clip0_360_35)">
              <rect width="430" height="2554" fill="white" />
              <g filter="url(#filter0_b_360_35)">
                <ellipse
                  cx="41"
                  cy="174"
                  rx="56"
                  ry="52"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter1_b_360_35)">
                <ellipse
                  cx="438"
                  cy="46.5"
                  rx="202"
                  ry="185.5"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M639.5 46.5C639.5 148.633 549.326 231.5 438 231.5C326.674 231.5 236.5 148.633 236.5 46.5C236.5 -55.6334 326.674 -138.5 438 -138.5C549.326 -138.5 639.5 -55.6334 639.5 46.5Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter2_b_360_35)">
                <ellipse
                  cx="263.5"
                  cy="1046"
                  rx="137.5"
                  ry="136"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M400.5 1046C400.5 1120.83 339.168 1181.5 263.5 1181.5C187.832 1181.5 126.5 1120.83 126.5 1046C126.5 971.171 187.832 910.5 263.5 910.5C339.168 910.5 400.5 971.171 400.5 1046Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter3_b_360_35)">
                <ellipse
                  cx="177.5"
                  cy="338"
                  rx="36.5"
                  ry="32"
                  fill="#FF1100"
                  fill-opacity="0.05"
                />
              </g>
              <g filter="url(#filter4_b_360_35)">
                <ellipse
                  cx="438.5"
                  cy="545.5"
                  rx="116.5"
                  ry="117.5"
                  fill="#0040FF"
                  fill-opacity="0.1"
                />
                <path
                  d="M554.5 545.5C554.5 610.121 502.561 662.5 438.5 662.5C374.439 662.5 322.5 610.121 322.5 545.5C322.5 480.879 374.439 428.5 438.5 428.5C502.561 428.5 554.5 480.879 554.5 545.5Z"
                  stroke="#0040FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter5_b_360_35)">
                <ellipse
                  cx="-44"
                  cy="640"
                  rx="209"
                  ry="174"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter6_b_360_35)">
                <ellipse
                  cx="398.34"
                  cy="1310.39"
                  rx="56"
                  ry="52"
                  transform="rotate(-45.5 398.34 1310.39)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter7_b_360_35)">
                <ellipse
                  cx="7.72992"
                  cy="2230.89"
                  rx="56"
                  ry="52"
                  transform="rotate(-101 7.72992 2230.89)"
                  fill="#AE00FF"
                  fill-opacity="0.24"
                />
              </g>
              <g filter="url(#filter8_b_360_35)">
                <ellipse
                  cx="579.72"
                  cy="2043.52"
                  rx="276"
                  ry="292"
                  transform="rotate(-45.5 579.72 2043.52)"
                  fill="#FDAAAA"
                  fill-opacity="0.22"
                />
              </g>
              <g filter="url(#filter9_b_360_35)">
                <ellipse
                  cx="-71.4249"
                  cy="1572.15"
                  rx="326.405"
                  ry="314"
                  transform="rotate(67 -71.4249 1572.15)"
                  fill="#0000FF"
                  fill-opacity="0.09"
                />
                <path
                  d="M55.9162 1872.14C-103.444 1939.79 -289.667 1860.34 -360.003 1694.64C-430.339 1528.94 -358.127 1339.79 -198.766 1272.15C-39.4053 1204.51 146.818 1283.95 217.153 1449.65C287.489 1615.35 215.277 1804.5 55.9162 1872.14Z"
                  stroke="#0000FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter10_b_360_35)">
                <ellipse
                  cx="-63.2222"
                  cy="2398.15"
                  rx="196"
                  ry="166"
                  transform="rotate(-45.5 -63.2222 2398.15)"
                  fill="#4C00FF"
                  fill-opacity="0.2"
                />
                <path
                  d="M73.8055 2258.71C138.946 2322.72 130.556 2437.08 54.8207 2514.15C-20.9145 2591.22 -135.11 2601.6 -200.25 2537.59C-265.39 2473.58 -257 2359.22 -181.265 2282.15C-105.53 2205.08 8.66544 2194.69 73.8055 2258.71Z"
                  stroke="#4C00FF"
                  stroke-opacity="0.01"
                />
              </g>
              <g filter="url(#filter11_b_360_35)">
                <rect
                  width="430"
                  height="2554"
                  fill="#DEDEDE"
                  fill-opacity="0.14"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_360_35"
                x="-55"
                y="82"
                width="192"
                height="184"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_360_35"
                x="196"
                y="-179"
                width="484"
                height="451"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_b_360_35"
                x="86"
                y="870"
                width="355"
                height="352"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_b_360_35"
                x="101"
                y="266"
                width="153"
                height="144"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_b_360_35"
                x="282"
                y="388"
                width="313"
                height="315"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_b_360_35"
                x="-293"
                y="426"
                width="498"
                height="428"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_b_360_35"
                x="304.338"
                y="1216.32"
                width="188.004"
                height="188.145"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_b_360_35"
                x="-84.4316"
                y="2135.02"
                width="184.323"
                height="191.738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_b_360_35"
                x="255.467"
                y="1719.55"
                width="648.507"
                height="647.947"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_b_360_35"
                x="-427.43"
                y="1207.52"
                width="712.009"
                height="729.254"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter10_b_360_35"
                x="-284.584"
                y="2176.26"
                width="442.725"
                height="443.772"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <filter
                id="filter11_b_360_35"
                x="-40"
                y="-40"
                width="510"
                height="2634"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_360_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_360_35"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_360_35">
                <rect width="430" height="2554" fill="white" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </div>
      <div className="app-content" style={{ zIndex: 1 }}>
        <NavBar></NavBar>

        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <MyServices />
        </section>
        <section id="projects">
          <MyProjects />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
