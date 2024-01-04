import React from 'react'

const Home23_BG = ({t}) => {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={1440}
  height={2130}
  viewBox="0 0 1440 2130"
  className='Home23_BG'
>
  <defs>
    <pattern
      id="pattern_Home23"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 4096"
    >
      <image width={4096} height={4096} xlinkHref="../Home/2+3/Home23-image.webp" />
    </pattern>
    <pattern
      id="pattern_Home23-2"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 4096 4096"
    >
      <image width={4096} height={4096} xlinkHref="../Home/2+3/Face.webp" />
    </pattern>
    <pattern
      id="pattern_Home23-3"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
    >
      <image width={1000} height={1000} xlinkHref="../Home/2+3/Home23-image3.png" />
    </pattern>
    <clipPath id="clip-path_Home23">
      <rect
        id="Rectangle_9545"
        data-name="Rectangle 9545"
        width="556.986"
        height="340.879"
        transform="matrix(0.948, 0.318, -0.318, 0.948, -24.506, 1435)"
        fill="#d9d9d9"
      />
    </clipPath>
    <pattern
      id="pattern-4_Home23"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      viewBox="0 0 3309 1418"
    >
      <image width={3309} height={1418} xlinkHref="../Home/2+3/Home23-image4.webp" />
    </pattern>
    <filter
      id="OUR_SERVICES"
      x="13.988"
      y="645.854"
      width="266.215"
      height="116.215"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dx="-18.405" dy="14.461" input="SourceAlpha" />
      <feGaussianBlur stdDeviation="9.202" result="blur" />
      <feFlood floodColor="#fff" />
      <feComposite operator="in" in2="blur" />
      <feComposite in="SourceGraphic" />
    </filter>
    <clipPath id="clip-Home23">
      <rect width={1440} height={2130} />
    </clipPath>
  </defs>
  <g id="Home23" clipPath="url(#clip-Home23)">
    <rect width={1440} height={2130} fill="#EFF1F2" />
    <g id="Home_2_3" transform="translate(0 -905)">
      <path
        id="Path_1"
        data-name="Path 1"
        d="M161.125,243.825c75.7,33.638,104.458,126.238,61.138,196.842L-188.186,1109.63c-67.836,110.56-237.061,73.7-252.765-55.06L-550.736,154.426c-12.886-105.652,94.362-185,191.626-141.782Z"
        transform="translate(0 1546)"
        fill="#c7f36c"
      />
      <rect
        id="Face_glow_1"
        data-name="Face glow 1"
        width={876}
        height={876}
        transform="translate(-464 802)"
        fill="url(#pattern_Home23)"
      />
      <g className='Facess'>
      <rect
        id="Face_1"
        data-name="Face 1"
        width={842}
        height={842}
        transform="translate(931 1031)"
        fill="url(#pattern_Home23-2)"
      />
      <rect
        id="SDNone-face-Loop-Mov_1_1"
        data-name="SDNone-face-Loop-Mov (1) 1"
        className='Face_Animation'
        width={602}
        height={602}
        transform="translate(1051 1200)"
        fill="url(#pattern_Home23-3)"
        style={{ mixBlendMode: "color-dodge", isolation: "isolate" }}
      />
      </g>
      
      <g id="HandShake" opacity="0.34">
        <g
          id="Rectangle_9545-2"
          data-name="Rectangle 9545"
          clipPath="url(#clip-path_Home23)"
        >
          <rect
            id="Handshake_1"
            data-name="Handshake 1"
            width="814.684"
            height="349.034"
            transform="translate(-101.166 1351.627) rotate(25.449)"
            fill="url(#pattern-4_Home23)"
          />
        </g>
      </g>
      <g id="WHAT_WE_DO" data-name="WHAT WE DO">
        <g id="Group_162569" data-name="Group 162569">
          <g id="What_we_do-2" data-name="What we do">
            <g id="Group_162565" data-name="Group 162565">
              <g id="Group_162567" data-name="Group 162567">
                <g
                  transform="matrix(1, 0, 0, 1, 0, 905)"
                  filter="url(#OUR_SERVICES)"
                >
                  <text
                    id="OUR_SERVICES-2"
                    data-name="OUR SERVICES"
                    transform="translate(55 659)"
                    fill="#404130"
                    fontSize="38"
                    fontFamily="Poppins"
                    letterSpacing="-0.08em"
                    fontWeight={900}
                  >
                    <tspan x={0} y={38}>
                      {t("OUR SERVICES")}
                    </tspan>
                  </text>
                </g>
                <g id="Group_162563" data-name="Group 162563">
                  <path
                    id="Vector"
                    d="M184,8.875C171.341,87.465,56.052,83.3,0,71.393,22.166,44.59,64.634,18.541,83.1,8.875c37.978-16.072,83.087-6.7,100.9,0Z"
                    transform="translate(162 1471)"
                    fill="#3fb4c3"
                  />
                  <text
                    id="WHAT_WE_DO-3"
                    data-name="WHAT WE DO"
                    transform="translate(55 1441)"
                    fontSize={55}
                    fontFamily=""
                    fontWeight={800}
                    letterSpacing="-0.05em"
                  >
                    <tspan x={0} y={58}>
                      {t("WHAT WE")}
                    </tspan>
                    <tspan fontSize="75.789">
                      <tspan className='Svg_DO' x={0} y={119}>
                       {t("DO")}
                      </tspan>
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <path
        id="Path_2"
        data-name="Path 2"
        d="M433.043,119.528c75.7,33.638,104.458,126.237,61.138,196.842L304.708,625.178c-67.835,110.56-237.061,73.7-252.765-55.06L1.264,154.591C-11.622,48.939,95.626-30.413,192.89,12.809Z"
        transform="translate(1162.55 2337.345)"
        fill="#c7f36c"
      />
      <g id="Frame" transform="translate(1167 1821) rotate(180)">
        <rect
          id="Frame_Frame_Background_"
          data-name="Frame [Frame Background]"
          width={798}
          height={659}
          transform="translate(0 -659)"
          fill="none"
        />
        <g id="Group">
          <path
            id="Vector-2"
            data-name="Vector"
            d="M624.561-659H17.074v34.117H624.561c76.8,0,139.291,62.434,139.291,139.162S701.359-346.559,624.561-346.559H173.439C77.8-346.559,0-268.825,0-173.279S77.8,0,173.439,0H780.926V-34.117H173.439c-76.8,0-139.291-62.434-139.291-139.162S96.641-312.441,173.439-312.441H624.561C720.2-312.441,798-390.175,798-485.721S720.2-659,624.561-659Z"
          />
        </g>
      </g>
      <g id="Group_84" data-name="Group 84" opacity="0.02">

      </g>
    </g>
  </g>
</svg>

  )
}

export default Home23_BG