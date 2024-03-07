import React, { useEffect, useMemo, useState, memo } from "react";
import { twMerge } from "tailwind-merge";
import { useAvailableAssets } from "../../../hooks/hooks";
import { incentiveTokens } from "../../../utils/config";
import { isMobileDevice } from "../../../helpers/helpers";
import { useAPY } from "../../../hooks/useAPY";

const StakeCarousel = () => {
  const [tokenRowOne, setTokenRowOne] = useState<any>();
  const [tokenRowTwo, setTokenRowTwo] = useState<any>();
  const assets = useAvailableAssets();
  // TODO
  useEffect(() => {
    if (assets?.length) {
      const incentiveTokensData = assets.filter((asset) => incentiveTokens.includes(asset.tokenId));
      if (incentiveTokensData?.length === 2) {
        setTokenRowOne(incentiveTokensData[0]);
        setTokenRowTwo(incentiveTokensData[1]);
      }
    }
  }, [assets?.length]);
  return (
    <div className="flex items-center justify-center">
      {isMobileDevice() ? <BoxMobileSvg /> : <BoxSvg />}
      <div className="absolute content lg:top-[76px] xsm:top-[48px] left-[200px] pl-[12px] flex flex-col items-center">
        {tokenRowOne && tokenRowTwo ? (
          <APYComponent rowOne={tokenRowOne} rowTwo={tokenRowTwo} />
        ) : (
          <p className="text-primary text-6xl font-bold pt-[62px]">0%</p>
        )}
        <Button
          classInfo="text-dark-200 bg-primary cursor-pointer font-medium"
          onClick={() => {
            window.open(`/staking`);
          }}
        >
          <p className="mr-1"> Stake BRRR</p> <Arrow />
        </Button>
      </div>
    </div>
  );
};

export default StakeCarousel;

function BoxSvg() {
  return (
    <svg
      width="381"
      height="255"
      viewBox="0 0 381 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3700_1018)">
        <rect x="21" y="31" width="339" height="200" rx="12" fill="#0A0C22" />
        <rect x="20.5" y="30.5" width="340" height="201" rx="12.5" stroke="#D2FF3A" />
      </g>
      <path d="M306 198H317M317 198L313.097 194M317 198L313.097 202" stroke="black" />
      <path
        d="M72.3794 72.204C72.3794 76.096 69.4114 78.28 65.1834 78.28C62.2154 78.28 59.2194 77.244 56.8674 75.144L59.4154 72.092C61.1794 73.548 63.0274 74.472 65.2674 74.472C67.0314 74.472 68.0954 73.772 68.0954 72.624V72.568C68.0954 71.476 67.4234 70.916 64.1474 70.076C60.1994 69.068 57.6514 67.976 57.6514 64.084V64.028C57.6514 60.472 60.5074 58.12 64.5114 58.12C67.3674 58.12 69.8034 59.016 71.7914 60.612L69.5514 63.86C67.8154 62.656 66.1074 61.928 64.4554 61.928C62.8034 61.928 61.9354 62.684 61.9354 63.636V63.692C61.9354 64.98 62.7754 65.4 66.1634 66.268C70.1394 67.304 72.3794 68.732 72.3794 72.148V72.204ZM83.9648 77.384C83.0688 77.916 82.0328 78.252 80.6048 78.252C78.0008 78.252 76.2368 77.216 76.2368 73.744V66.632H74.4448V62.992H76.2368V59.156H80.4928V62.992H84.0208V66.632H80.4928V73.044C80.4928 74.024 80.9128 74.5 81.8648 74.5C82.6488 74.5 83.3488 74.304 83.9648 73.968V77.384ZM100.066 78H95.9499V76.376C94.9139 77.524 93.4859 78.28 91.4139 78.28C88.5859 78.28 86.2619 76.656 86.2619 73.688V73.632C86.2619 70.356 88.7539 68.844 92.3099 68.844C93.8219 68.844 94.9139 69.096 95.9779 69.46V69.208C95.9779 67.444 94.8859 66.464 92.7579 66.464C91.1339 66.464 89.9859 66.772 88.6139 67.276L87.5499 64.028C89.2019 63.3 90.8259 62.824 93.3739 62.824C98.0219 62.824 100.066 65.232 100.066 69.292V78ZM96.0339 72.708V71.952C95.3059 71.616 94.3539 71.392 93.3179 71.392C91.4979 71.392 90.3779 72.12 90.3779 73.464V73.52C90.3779 74.668 91.3299 75.34 92.7019 75.34C94.6899 75.34 96.0339 74.248 96.0339 72.708ZM118.26 78H113.388L109.468 71.868L107.984 73.436V78H103.728V57.56H107.984V68.452L112.968 62.992H118.064L112.352 68.9L118.26 78ZM133.588 70.916C133.588 71.336 133.56 71.588 133.532 71.98H123.088C123.508 73.912 124.852 74.92 126.756 74.92C128.184 74.92 129.22 74.472 130.396 73.38L132.832 75.536C131.432 77.272 129.416 78.336 126.7 78.336C122.192 78.336 118.86 75.172 118.86 70.58V70.524C118.86 66.24 121.912 62.712 126.28 62.712C131.292 62.712 133.588 66.604 133.588 70.86V70.916ZM129.444 69.32C129.192 67.416 128.072 66.128 126.28 66.128C124.516 66.128 123.368 67.388 123.032 69.32H129.444ZM284.569 78H280.901L271.409 65.54V78H267.153V58.4H271.129L280.313 70.468V58.4H284.569V78ZM304.338 70.524C304.338 74.836 300.866 78.336 296.19 78.336C291.542 78.336 288.098 74.892 288.098 70.58V70.524C288.098 66.212 291.57 62.712 296.246 62.712C300.894 62.712 304.338 66.156 304.338 70.468V70.524ZM300.138 70.58V70.524C300.138 68.312 298.542 66.38 296.19 66.38C293.754 66.38 292.298 68.256 292.298 70.468V70.524C292.298 72.736 293.894 74.668 296.246 74.668C298.682 74.668 300.138 72.792 300.138 70.58ZM328.241 62.992L323.565 78.112H319.729L316.845 68.9L313.905 78.112H310.097L305.477 62.992H309.789L312.197 72.092L315.025 62.936H318.693L321.549 72.12L324.013 62.992H328.241ZM330.966 58.4H335.95V58.96L334.634 71.336H332.282L330.966 58.96V58.4ZM335.726 78H331.19V73.52H335.726V78Z"
        fill="white"
      />
      <path
        d="M162.322 71.632C162.322 75.184 159.602 77.52 155.538 77.968V81.136H152.21V77.904C149.458 77.552 146.77 76.464 144.658 74.864L147.154 71.216C148.882 72.528 150.482 73.424 152.37 73.808V68.72C147.762 67.472 145.49 65.68 145.49 61.904C145.49 58.352 148.178 56.016 152.21 55.6V53.744H155.538V55.664C157.81 55.984 159.762 56.816 161.49 58.032L159.346 61.776C158.066 60.912 156.722 60.24 155.378 59.888V64.72C160.242 66.032 162.322 68.048 162.322 71.632ZM152.37 63.92V59.6C150.834 59.824 150.162 60.592 150.162 61.616C150.162 62.608 150.61 63.28 152.37 63.92ZM157.65 71.888C157.65 70.8 157.106 70.128 155.378 69.488V73.968C156.882 73.744 157.65 73.04 157.65 71.888ZM185.666 71.856C185.666 75.952 182.338 78 177.282 78H166.626V55.6H177.026C181.602 55.6 184.418 57.872 184.418 61.392V61.456C184.418 63.984 183.074 65.392 181.474 66.288C184.066 67.28 185.666 68.784 185.666 71.792V71.856ZM179.522 62.288V62.224C179.522 60.752 178.37 59.92 176.29 59.92H171.426V64.656H175.97C178.146 64.656 179.522 63.952 179.522 62.288ZM180.77 71.248V71.184C180.77 69.68 179.65 68.752 177.122 68.752H171.426V73.68H177.282C179.458 73.68 180.77 72.912 180.77 71.248ZM209.079 78H203.319L198.519 70.832H194.647V78H189.719V55.6H199.959C205.239 55.6 208.407 58.384 208.407 62.992V63.056C208.407 66.672 206.455 68.944 203.607 70L209.079 78ZM203.415 63.312V63.248C203.415 61.136 201.943 60.048 199.543 60.048H194.647V66.48H199.639C202.039 66.48 203.415 65.2 203.415 63.312ZM232.204 78H226.444L221.644 70.832H217.772V78H212.844V55.6H223.084C228.364 55.6 231.532 58.384 231.532 62.992V63.056C231.532 66.672 229.58 68.944 226.732 70L232.204 78ZM226.54 63.312V63.248C226.54 61.136 225.068 60.048 222.668 60.048H217.772V66.48H222.764C225.164 66.48 226.54 65.2 226.54 63.312ZM255.329 78H249.569L244.769 70.832H240.897V78H235.969V55.6H246.209C251.489 55.6 254.657 58.384 254.657 62.992V63.056C254.657 66.672 252.705 68.944 249.857 70L255.329 78ZM249.665 63.312V63.248C249.665 61.136 248.193 60.048 245.793 60.048H240.897V66.48H245.889C248.289 66.48 249.665 65.2 249.665 63.312Z"
        fill="#D2FF3A"
      />
      <path
        d="M222.641 115H218.455L216.791 110.918H209.095L207.431 115H203.349L211.149 96.67H214.841L222.641 115ZM215.361 107.382L212.943 101.48L210.525 107.382H215.361ZM239.854 103.144C239.854 107.356 236.578 109.54 232.496 109.54H229.454V115H225.45V96.8H232.886C237.228 96.8 239.854 99.374 239.854 103.092V103.144ZM235.798 103.222V103.17C235.798 101.376 234.55 100.414 232.548 100.414H229.454V105.978H232.626C234.628 105.978 235.798 104.782 235.798 103.222ZM258.683 96.8L251.689 107.746V115H247.685V107.824L240.691 96.8H245.371L249.713 104.106L254.133 96.8H258.683ZM281.215 115H277.263V113.024C276.353 114.194 275.183 115.26 273.181 115.26C270.191 115.26 268.449 113.284 268.449 110.086V101.064H272.401V108.838C272.401 110.71 273.285 111.672 274.793 111.672C276.301 111.672 277.263 110.71 277.263 108.838V101.064H281.215V115ZM299.39 108.058C299.39 112.712 296.348 115.26 293.046 115.26C290.94 115.26 289.64 114.298 288.704 113.18V119.16H284.752V101.064H288.704V103.066C289.666 101.766 290.992 100.804 293.046 100.804C296.296 100.804 299.39 103.352 299.39 108.006V108.058ZM295.438 108.058V108.006C295.438 105.692 293.878 104.158 292.032 104.158C290.186 104.158 288.652 105.692 288.652 108.006V108.058C288.652 110.372 290.186 111.906 292.032 111.906C293.878 111.906 295.438 110.398 295.438 108.058ZM317.918 114.428C317.086 114.922 316.124 115.234 314.798 115.234C312.38 115.234 310.742 114.272 310.742 111.048V104.444H309.078V101.064H310.742V97.502H314.694V101.064H317.97V104.444H314.694V110.398C314.694 111.308 315.084 111.75 315.968 111.75C316.696 111.75 317.346 111.568 317.918 111.256V114.428ZM334.906 108.058C334.906 112.062 331.682 115.312 327.34 115.312C323.024 115.312 319.826 112.114 319.826 108.11V108.058C319.826 104.054 323.05 100.804 327.392 100.804C331.708 100.804 334.906 104.002 334.906 108.006V108.058ZM331.006 108.11V108.058C331.006 106.004 329.524 104.21 327.34 104.21C325.078 104.21 323.726 105.952 323.726 108.006V108.058C323.726 110.112 325.208 111.906 327.392 111.906C329.654 111.906 331.006 110.164 331.006 108.11Z"
        fill="white"
      />
      <path
        d="M167.988 179.63L183.524 155.881L185.806 161.603L197.708 142"
        stroke="#D2FF3A"
        strokeWidth="3"
      />
      <path
        d="M57.7075 106.63L42.1716 82.8812L39.889 88.6029L27.9877 69.0004"
        stroke="#D2FF3A"
        strokeWidth="3"
      />
      <path
        d="M106.263 217.406C126.959 217.406 145.713 215.338 159.306 211.987C166.099 210.312 171.632 208.31 175.479 206.068C179.29 203.846 181.608 201.29 181.608 198.453C181.608 195.616 179.29 193.06 175.479 190.838C171.632 188.596 166.099 186.594 159.306 184.919C145.713 181.568 126.959 179.5 106.263 179.5C85.5666 179.5 66.8131 181.568 53.2192 184.919C46.4262 186.594 40.8935 188.596 37.0471 190.838C33.2361 193.06 30.9171 195.616 30.9171 198.453C30.9171 201.29 33.2361 203.846 37.0471 206.068C40.8935 208.31 46.4262 210.312 53.2192 211.987C66.8131 215.338 85.5666 217.406 106.263 217.406Z"
        fill="#D2FF3A"
        stroke="#D2FF3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0099 204.867C46.5241 197.784 73.9514 192.733 106.131 192.733C138.31 192.733 165.737 197.784 176.251 204.867C165.737 211.949 138.31 217 106.131 217C73.9514 217 46.5241 211.949 36.0099 204.867Z"
        fill="black"
      />
      <path
        d="M113.662 150.24C143.234 138.981 163.04 136.279 163.04 136.279C163.04 136.279 163.687 137.823 164.011 138.674C174.269 165.618 157.83 196.885 127.293 208.511C96.7559 220.136 63.6853 207.718 53.4276 180.774C52.0534 177.164 50.0489 168.023 50.0489 168.023C50.0489 168.023 87.2161 160.308 113.662 150.24Z"
        fill="#D2FF3A"
        stroke="#23253A"
        strokeWidth="2"
      />
      <ellipse
        cx="105.575"
        cy="147.662"
        rx="52.2029"
        ry="59.1632"
        transform="rotate(-110.842 105.575 147.662)"
        fill="#D2FF3A"
        stroke="#23253A"
        strokeWidth="2"
      />
      <path
        d="M107.342 187.869C95.6532 181.086 83.3325 170.747 75.7286 158.689C67.057 144.938 69.0376 128.212 87.375 119.923C107.946 110.624 127.939 114.239 129.085 126.277C130.002 135.907 121.599 144.3 104.775 148.027C85.5488 152.288 85.0678 140.793 92.5706 135.827C98.5728 131.855 109.629 128.129 117.705 129.182M136.92 137.678C136.92 137.678 143.081 138.993 142.701 146.846C142.287 155.388 127.075 169.591 101.803 168.354"
        stroke="#23253A"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_3700_1018"
          x="0"
          y="10"
          width="381"
          height="242"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3700_1018" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3700_1018"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
function BoxMobileSvg() {
  return (
    <svg
      width="381"
      height="245"
      viewBox="0 0 381 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3700_1019)">
        <rect x="21" y="21" width="339" height="200" rx="12" fill="#0A0C22" />
        <rect x="20.5" y="20.5" width="340" height="201" rx="12.5" stroke="#D2FF3A" />
      </g>
      <path d="M306 188H317M317 188L313.097 184M317 188L313.097 192" stroke="black" />
      <path
        d="M72.3794 62.204C72.3794 66.096 69.4114 68.28 65.1834 68.28C62.2154 68.28 59.2194 67.244 56.8674 65.144L59.4154 62.092C61.1794 63.548 63.0274 64.472 65.2674 64.472C67.0314 64.472 68.0954 63.772 68.0954 62.624V62.568C68.0954 61.476 67.4234 60.916 64.1474 60.076C60.1994 59.068 57.6514 57.976 57.6514 54.084V54.028C57.6514 50.472 60.5074 48.12 64.5114 48.12C67.3674 48.12 69.8034 49.016 71.7914 50.612L69.5514 53.86C67.8154 52.656 66.1074 51.928 64.4554 51.928C62.8034 51.928 61.9354 52.684 61.9354 53.636V53.692C61.9354 54.98 62.7754 55.4 66.1634 56.268C70.1394 57.304 72.3794 58.732 72.3794 62.148V62.204ZM83.9648 67.384C83.0688 67.916 82.0328 68.252 80.6048 68.252C78.0008 68.252 76.2368 67.216 76.2368 63.744V56.632H74.4448V52.992H76.2368V49.156H80.4928V52.992H84.0208V56.632H80.4928V63.044C80.4928 64.024 80.9128 64.5 81.8648 64.5C82.6488 64.5 83.3488 64.304 83.9648 63.968V67.384ZM100.066 68H95.9499V66.376C94.9139 67.524 93.4859 68.28 91.4139 68.28C88.5859 68.28 86.2619 66.656 86.2619 63.688V63.632C86.2619 60.356 88.7539 58.844 92.3099 58.844C93.8219 58.844 94.9139 59.096 95.9779 59.46V59.208C95.9779 57.444 94.8859 56.464 92.7579 56.464C91.1339 56.464 89.9859 56.772 88.6139 57.276L87.5499 54.028C89.2019 53.3 90.8259 52.824 93.3739 52.824C98.0219 52.824 100.066 55.232 100.066 59.292V68ZM96.0339 62.708V61.952C95.3059 61.616 94.3539 61.392 93.3179 61.392C91.4979 61.392 90.3779 62.12 90.3779 63.464V63.52C90.3779 64.668 91.3299 65.34 92.7019 65.34C94.6899 65.34 96.0339 64.248 96.0339 62.708ZM118.26 68H113.388L109.468 61.868L107.984 63.436V68H103.728V47.56H107.984V58.452L112.968 52.992H118.064L112.352 58.9L118.26 68ZM133.588 60.916C133.588 61.336 133.56 61.588 133.532 61.98H123.088C123.508 63.912 124.852 64.92 126.756 64.92C128.184 64.92 129.22 64.472 130.396 63.38L132.832 65.536C131.432 67.272 129.416 68.336 126.7 68.336C122.192 68.336 118.86 65.172 118.86 60.58V60.524C118.86 56.24 121.912 52.712 126.28 52.712C131.292 52.712 133.588 56.604 133.588 60.86V60.916ZM129.444 59.32C129.192 57.416 128.072 56.128 126.28 56.128C124.516 56.128 123.368 57.388 123.032 59.32H129.444ZM284.569 68H280.901L271.409 55.54V68H267.153V48.4H271.129L280.313 60.468V48.4H284.569V68ZM304.338 60.524C304.338 64.836 300.866 68.336 296.19 68.336C291.542 68.336 288.098 64.892 288.098 60.58V60.524C288.098 56.212 291.57 52.712 296.246 52.712C300.894 52.712 304.338 56.156 304.338 60.468V60.524ZM300.138 60.58V60.524C300.138 58.312 298.542 56.38 296.19 56.38C293.754 56.38 292.298 58.256 292.298 60.468V60.524C292.298 62.736 293.894 64.668 296.246 64.668C298.682 64.668 300.138 62.792 300.138 60.58ZM328.241 52.992L323.565 68.112H319.729L316.845 58.9L313.905 68.112H310.097L305.477 52.992H309.789L312.197 62.092L315.025 52.936H318.693L321.549 62.12L324.013 52.992H328.241ZM330.966 48.4H335.95V48.96L334.634 61.336H332.282L330.966 48.96V48.4ZM335.726 68H331.19V63.52H335.726V68Z"
        fill="white"
      />
      <path
        d="M162.322 61.632C162.322 65.184 159.602 67.52 155.538 67.968V71.136H152.21V67.904C149.458 67.552 146.77 66.464 144.658 64.864L147.154 61.216C148.882 62.528 150.482 63.424 152.37 63.808V58.72C147.762 57.472 145.49 55.68 145.49 51.904C145.49 48.352 148.178 46.016 152.21 45.6V43.744H155.538V45.664C157.81 45.984 159.762 46.816 161.49 48.032L159.346 51.776C158.066 50.912 156.722 50.24 155.378 49.888V54.72C160.242 56.032 162.322 58.048 162.322 61.632ZM152.37 53.92V49.6C150.834 49.824 150.162 50.592 150.162 51.616C150.162 52.608 150.61 53.28 152.37 53.92ZM157.65 61.888C157.65 60.8 157.106 60.128 155.378 59.488V63.968C156.882 63.744 157.65 63.04 157.65 61.888ZM185.666 61.856C185.666 65.952 182.338 68 177.282 68H166.626V45.6H177.026C181.602 45.6 184.418 47.872 184.418 51.392V51.456C184.418 53.984 183.074 55.392 181.474 56.288C184.066 57.28 185.666 58.784 185.666 61.792V61.856ZM179.522 52.288V52.224C179.522 50.752 178.37 49.92 176.29 49.92H171.426V54.656H175.97C178.146 54.656 179.522 53.952 179.522 52.288ZM180.77 61.248V61.184C180.77 59.68 179.65 58.752 177.122 58.752H171.426V63.68H177.282C179.458 63.68 180.77 62.912 180.77 61.248ZM209.079 68H203.319L198.519 60.832H194.647V68H189.719V45.6H199.959C205.239 45.6 208.407 48.384 208.407 52.992V53.056C208.407 56.672 206.455 58.944 203.607 60L209.079 68ZM203.415 53.312V53.248C203.415 51.136 201.943 50.048 199.543 50.048H194.647V56.48H199.639C202.039 56.48 203.415 55.2 203.415 53.312ZM232.204 68H226.444L221.644 60.832H217.772V68H212.844V45.6H223.084C228.364 45.6 231.532 48.384 231.532 52.992V53.056C231.532 56.672 229.58 58.944 226.732 60L232.204 68ZM226.54 53.312V53.248C226.54 51.136 225.068 50.048 222.668 50.048H217.772V56.48H222.764C225.164 56.48 226.54 55.2 226.54 53.312ZM255.329 68H249.569L244.769 60.832H240.897V68H235.969V45.6H246.209C251.489 45.6 254.657 48.384 254.657 52.992V53.056C254.657 56.672 252.705 58.944 249.857 60L255.329 68ZM249.665 53.312V53.248C249.665 51.136 248.193 50.048 245.793 50.048H240.897V56.48H245.889C248.289 56.48 249.665 55.2 249.665 53.312Z"
        fill="#D2FF3A"
      />
      <path
        d="M222.641 105H218.455L216.791 100.918H209.095L207.431 105H203.349L211.149 86.67H214.841L222.641 105ZM215.361 97.382L212.943 91.48L210.525 97.382H215.361ZM239.854 93.144C239.854 97.356 236.578 99.54 232.496 99.54H229.454V105H225.45V86.8H232.886C237.228 86.8 239.854 89.374 239.854 93.092V93.144ZM235.798 93.222V93.17C235.798 91.376 234.55 90.414 232.548 90.414H229.454V95.978H232.626C234.628 95.978 235.798 94.782 235.798 93.222ZM258.683 86.8L251.689 97.746V105H247.685V97.824L240.691 86.8H245.371L249.713 94.106L254.133 86.8H258.683ZM281.215 105H277.263V103.024C276.353 104.194 275.183 105.26 273.181 105.26C270.191 105.26 268.449 103.284 268.449 100.086V91.064H272.401V98.838C272.401 100.71 273.285 101.672 274.793 101.672C276.301 101.672 277.263 100.71 277.263 98.838V91.064H281.215V105ZM299.39 98.058C299.39 102.712 296.348 105.26 293.046 105.26C290.94 105.26 289.64 104.298 288.704 103.18V109.16H284.752V91.064H288.704V93.066C289.666 91.766 290.992 90.804 293.046 90.804C296.296 90.804 299.39 93.352 299.39 98.006V98.058ZM295.438 98.058V98.006C295.438 95.692 293.878 94.158 292.032 94.158C290.186 94.158 288.652 95.692 288.652 98.006V98.058C288.652 100.372 290.186 101.906 292.032 101.906C293.878 101.906 295.438 100.398 295.438 98.058ZM317.918 104.428C317.086 104.922 316.124 105.234 314.798 105.234C312.38 105.234 310.742 104.272 310.742 101.048V94.444H309.078V91.064H310.742V87.502H314.694V91.064H317.97V94.444H314.694V100.398C314.694 101.308 315.084 101.75 315.968 101.75C316.696 101.75 317.346 101.568 317.918 101.256V104.428ZM334.906 98.058C334.906 102.062 331.682 105.312 327.34 105.312C323.024 105.312 319.826 102.114 319.826 98.11V98.058C319.826 94.054 323.05 90.804 327.392 90.804C331.708 90.804 334.906 94.002 334.906 98.006V98.058ZM331.006 98.11V98.058C331.006 96.004 329.524 94.21 327.34 94.21C325.078 94.21 323.726 95.952 323.726 98.006V98.058C323.726 100.112 325.208 101.906 327.392 101.906C329.654 101.906 331.006 100.164 331.006 98.11Z"
        fill="white"
      />
      <path
        d="M167.988 169.63L183.524 145.881L185.806 151.603L197.708 132"
        stroke="#D2FF3A"
        strokeWidth="3"
      />
      <path
        d="M57.7075 96.6303L42.1716 72.8812L39.889 78.6029L27.9877 59.0004"
        stroke="#D2FF3A"
        strokeWidth="3"
      />
      <path
        d="M106.263 207.406C126.959 207.406 145.712 205.338 159.306 201.987C166.099 200.312 171.632 198.31 175.478 196.068C179.289 193.846 181.608 191.29 181.608 188.453C181.608 185.616 179.289 183.06 175.478 180.838C171.632 178.596 166.099 176.594 159.306 174.919C145.712 171.568 126.959 169.5 106.263 169.5C85.5665 169.5 66.813 171.568 53.2191 174.919C46.426 176.594 40.8934 178.596 37.0469 180.838C33.236 183.06 30.917 185.616 30.917 188.453C30.917 191.29 33.236 193.846 37.0469 196.068C40.8934 198.31 46.426 200.312 53.2191 201.987C66.813 205.338 85.5665 207.406 106.263 207.406Z"
        fill="#D2FF3A"
        stroke="#D2FF3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0098 194.867C46.5239 187.784 73.9513 182.733 106.131 182.733C138.31 182.733 165.737 187.784 176.251 194.867C165.737 201.949 138.31 207 106.131 207C73.9513 207 46.5239 201.949 36.0098 194.867Z"
        fill="black"
      />
      <path
        d="M113.662 140.24C143.234 128.981 163.04 126.279 163.04 126.279C163.04 126.279 163.687 127.823 164.011 128.674C174.269 155.618 157.829 186.885 127.292 198.511C96.7555 210.136 63.6849 197.718 53.4272 170.774C52.053 167.164 50.0485 158.023 50.0485 158.023C50.0485 158.023 87.2157 150.308 113.662 140.24Z"
        fill="#D2FF3A"
        stroke="#23253A"
        strokeWidth="2"
      />
      <ellipse
        cx="105.575"
        cy="137.662"
        rx="52.2029"
        ry="59.1632"
        transform="rotate(-110.842 105.575 137.662)"
        fill="#D2FF3A"
        stroke="#23253A"
        strokeWidth="2"
      />
      <path
        d="M107.342 177.869C95.6528 171.086 83.332 160.747 75.7282 148.689C67.0565 134.938 69.0371 118.212 87.3745 109.923C107.946 100.624 127.939 104.239 129.085 116.277C130.002 125.907 121.598 134.3 104.775 138.027C85.5483 142.288 85.0673 130.793 92.5701 125.827C98.5723 121.855 109.629 118.129 117.705 119.182M136.919 127.678C136.919 127.678 143.08 128.993 142.7 136.846C142.287 145.388 127.074 159.591 101.802 158.354"
        stroke="#23253A"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_3700_1019"
          x="0"
          y="0"
          width="381"
          height="242"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3700_1019" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3700_1019"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
function Button({
  children,
  classInfo,
  onClick,
}: {
  children: React.ReactNode;
  classInfo: string;
  onClick?: any;
}) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-center text-sm rounded-md h-9 w-[136px] border-2 border-black font-medium",
        classInfo,
      )}
    >
      {children}
    </div>
  );
}
function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5H11M11 5L7.09677 1M11 5L7.09677 9" stroke="black" />
    </svg>
  );
}
function APYComponent({ rowOne, rowTwo }: any) {
  const rowOneAPY = useAPY({
    baseAPY: rowOne.supplyApy,
    rewards: rowOne.depositRewards,
    tokenId: rowOne.tokenId,
    page: "market",
    onlyMarket: true,
  });
  const rowTwoAPY = useAPY({
    baseAPY: rowTwo.supplyApy,
    rewards: rowTwo.depositRewards,
    tokenId: rowTwo.tokenId,
    page: "market",
    onlyMarket: true,
  });
  const highestAPY = Math.max(rowOneAPY, rowTwoAPY);
  const percentage = (highestAPY * 1.3).toFixed(0);
  return <p className="text-primary text-6xl font-bold pt-[62px] xsm:text-56">{percentage}%</p>;
}
