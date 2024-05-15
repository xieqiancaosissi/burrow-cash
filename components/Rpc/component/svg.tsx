import { BeatLoader } from "react-spinners";

// export const CircleIconLarge = (props: any) => {
//   const { width, height, className, ...rest } = props;
//   return (
//     <svg
//       {...props}
//       width="6"
//       height="6"
//       viewBox="0 0 6 6"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="5" cy="5" r="5" fill="currentColor" />
//     </svg>
//   );
// };
export const SelectedButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.5" fill="#00C6A2" stroke="#1D2932" />
      <path d="M6 10.5L8.66667 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
export const AddButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.2 7.55002C3.2 7.96424 3.53579 8.30002 3.95 8.30002C4.36421 8.30002 4.7 7.96424 4.7 7.55002V4.90002H7.55C7.96421 4.90002 8.3 4.56424 8.3 4.15002C8.3 3.73581 7.96421 3.40002 7.55 3.40002H4.7V0.750023C4.7 0.335809 4.36421 2.28882e-05 3.95 2.28882e-05C3.53579 2.28882e-05 3.2 0.335809 3.2 0.750023V3.40002H0.75C0.335786 3.40002 0 3.73581 0 4.15002C0 4.56424 0.335786 4.90002 0.75 4.90002H3.2V7.55002Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const CircleIcon = (props: any) => {
  const { width, height, className, ...rest } = props;
  return (
    <svg
      className={className}
      {...rest}
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  );
};
export const MoreButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="13"
      height="3"
      viewBox="0 0 13 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="6.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="11.5" cy="1.5" r="1.5" fill="currentColor" />
    </svg>
  );
};
export const SetButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2088 7.49638C20.0899 6.86833 19.7047 6.4622 19.2113 6.4622H19.1258C17.7926 6.4622 16.7082 5.37785 16.7082 4.04428C16.7082 3.623 16.9104 3.14264 16.9182 3.12354C17.1641 2.57005 16.9754 1.89178 16.4778 1.54365L13.9761 0.150736L13.9393 0.132739C13.4389 -0.0842961 12.7539 0.0546192 12.3807 0.443398C12.1106 0.721927 11.1796 1.51611 10.4692 1.51611C9.74958 1.51611 8.8165 0.705998 8.54508 0.422185C8.17255 0.0305651 7.49463 -0.116451 6.98849 0.10021L4.39776 1.51965L4.35887 1.5444C3.86122 1.89113 3.67177 2.56938 3.91638 3.12075C3.92483 3.14092 4.12773 3.61736 4.12773 4.0443C4.12773 5.37787 3.04335 6.46222 1.71018 6.46222H1.60911C1.13124 6.46222 0.745976 6.86833 0.627227 7.4964C0.618378 7.54059 0.417969 8.60341 0.417969 9.45557C0.417969 10.3066 0.618378 11.3691 0.627227 11.4129C0.745976 12.0414 1.13124 12.4478 1.62464 12.4478H1.71018C3.04335 12.4478 4.12773 13.5322 4.12773 14.8654C4.12773 15.2895 3.92485 15.7681 3.91708 15.7865C3.6718 16.341 3.85984 17.0182 4.35606 17.3646L6.81037 18.7416L6.84783 18.7586C7.35539 18.982 8.04176 18.8364 8.41289 18.4306C8.75571 18.0602 9.68459 17.2911 10.3667 17.2911C11.1061 17.2911 12.0583 18.1521 12.3326 18.4546C12.5856 18.7317 12.9744 18.8986 13.3724 18.8986C13.5583 18.8986 13.7343 18.8618 13.8955 18.7925L16.4403 17.3901L16.4778 17.366C16.9754 17.0182 17.1649 16.341 16.9196 15.7893C16.9111 15.7688 16.7082 15.2923 16.7082 14.8654C16.7082 13.5323 17.7926 12.4479 19.1258 12.4479H19.2255C19.704 12.4479 20.09 12.0414 20.2088 11.413C20.2172 11.3691 20.418 10.3067 20.418 9.4556C20.418 8.60339 20.2172 7.54057 20.2088 7.49638ZM18.9675 9.45555C18.9675 10.0062 18.8579 10.7138 18.8077 11.0093C16.8079 11.1733 15.2577 12.8444 15.2577 14.8654C15.2577 15.4358 15.4387 15.9823 15.5348 16.2336L13.3639 17.4325C13.2572 17.3208 12.9419 17.0026 12.5129 16.6831C11.7593 16.1247 11.0368 15.8394 10.3667 15.8394C9.70222 15.8394 8.98546 16.1176 8.23544 16.669C7.80848 16.98 7.49747 17.2896 7.38859 17.4041L5.30045 16.235C5.40225 15.9709 5.57828 15.4316 5.57828 14.8654C5.57828 12.8444 4.02807 11.1733 2.02899 11.0093C1.97809 10.7138 1.86852 10.0062 1.86852 9.45555C1.86852 8.9038 1.97809 8.19586 2.02899 7.90038C4.02807 7.73674 5.57828 6.0653 5.57828 4.0443C5.57828 3.47703 5.39731 2.92884 5.30117 2.67788L7.52576 1.45531C7.6226 1.55218 7.93999 1.86284 8.37401 2.17175C9.11343 2.69945 9.81753 2.96666 10.4693 2.96666C11.1146 2.96666 11.8137 2.70441 12.5482 2.18696C12.9858 1.87946 13.3025 1.57304 13.3943 1.48645L15.5355 2.67576C15.4387 2.9253 15.2577 3.47172 15.2577 4.0443C15.2577 6.0653 16.8079 7.73674 18.8077 7.90038C18.8579 8.19654 18.9675 8.90734 18.9675 9.45555Z"
        fill="currentColor"
      />
      <path
        d="M10.3742 5.88397C8.41255 5.88397 6.81641 7.48014 6.81641 9.44176C6.81641 11.4037 8.41257 12.9992 10.3742 12.9992C12.3358 12.9992 13.9319 11.4037 13.9319 9.44176C13.9319 7.48014 12.3358 5.88397 10.3742 5.88397ZM12.4814 9.44176C12.4814 10.6035 11.5363 11.5486 10.3742 11.5486C9.21204 11.5486 8.26763 10.6035 8.26763 9.44176C8.26763 8.28068 9.21204 7.33522 10.3742 7.33522C11.5363 7.33524 12.4814 8.28068 12.4814 9.44176Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const ReturnArrowButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.72189 0.26192C8.99145 0.576414 8.95503 1.04989 8.64054 1.31946L2.30489 6.75001L8.64054 12.1806C8.95503 12.4501 8.99145 12.9236 8.72189 13.2381C8.45232 13.5526 7.97884 13.589 7.66435 13.3195L0 6.75001L7.66435 0.180571C7.97884 -0.0889955 8.45232 -0.0525743 8.72189 0.26192Z"
        fill="#7E8A93"
      />
    </svg>
  );
};
export const DeleteButtonIcon = (props: any) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20ZM10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5ZM7.5 11.25H12.5C13.25 11.25 13.75 10.75 13.75 10C13.75 9.25 13.25 8.75 12.5 8.75H7.5C6.75 8.75 6.25 9.25 6.25 10C6.25 10.75 6.75 11.25 7.5 11.25Z"
        fill="#DE5050"
      />
    </svg>
  );
};
export const BeatLoading = ({ color }: { color?: string }) => {
  return <BeatLoader size={5} color={color || "#ffffff"} />;
};
export const ModalClose = (props: any) => {
  const { className, width, height, fillColor, ...rest } = props;
  return (
    <svg
      className={className}
      {...rest}
      width={width || "12"}
      height={height || "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99973 5.10533L1.07987 0.185461C0.960569 0.0702397 0.800789 0.00648358 0.63494 0.00792476C0.469091 0.00936594 0.310444 0.0758891 0.193166 0.193166C0.0758891 0.310444 0.00936596 0.469092 0.00792478 0.63494C0.0064836 0.800789 0.0702397 0.960569 0.185461 1.07987L5.10469 5.99973L0.185461 10.9196C0.126692 10.9783 0.0800658 11.0481 0.0482443 11.1248C0.0164228 11.2015 2.94086e-05 11.2838 3.95314e-08 11.3669C-2.93295e-05 11.45 0.0163059 11.5322 0.0480731 11.609C0.0798403 11.6858 0.126417 11.7555 0.185145 11.8143C0.243872 11.8731 0.3136 11.9197 0.390347 11.9515C0.467094 11.9834 0.549358 11.9997 0.63244 11.9998C0.715523 11.9998 0.797798 11.9835 0.874567 11.9517C0.951337 11.9199 1.0211 11.8734 1.07987 11.8146L5.99973 6.89414L10.9196 11.8146C10.9784 11.8734 11.0481 11.92 11.1249 11.9518C11.2017 11.9836 11.284 12 11.3671 12C11.4502 12 11.5325 11.9836 11.6093 11.9518C11.6861 11.92 11.7559 11.8734 11.8146 11.8146C11.8734 11.7559 11.92 11.6861 11.9518 11.6093C11.9836 11.5325 12 11.4502 12 11.3671C12 11.284 11.9836 11.2017 11.9518 11.1249C11.92 11.0481 11.8734 10.9784 11.8146 10.9196L6.89414 5.99973L11.8146 1.07987C11.9332 0.961177 11.9998 0.800233 11.9998 0.63244C11.9997 0.464648 11.933 0.30375 11.8143 0.185145C11.6956 0.0665393 11.5347 -5.92694e-05 11.3669 3.95789e-08C11.1991 5.93485e-05 11.0382 0.0667717 10.9196 0.185461L5.99973 5.10469V5.10533Z"
        fill={fillColor || "#7E8A93"}
      />
    </svg>
  );
};