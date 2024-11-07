import {
  Bell,
  Camera,
  FileVideo,
  Handshake,
  Heart,
  Image as ImageIcon,
  Info,
  Lightbulb,
  LogOut,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Pencil,
  Plus,
  Settings,
  Target,
  Trash,
  User,
  UserX,
  Video,
  X,
} from "lucide-react";

import type { LucideProps } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement> & LucideProps;

export const Icons = {
  twitter: (props: IconProps) => (
<svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
</svg>

  ),
  rightArrow: (props: IconProps) => (
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0.999999 1L8 8L1 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      width="46"
      height="24"
      viewBox="0 0 46 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.5" width="46" height="1" fill="currentColor" />
      <rect y="11.5" width="46" height="1" fill="currentColor" />
      <rect x="15" y="22.5" width="31" height="1" fill="currentColor" />
    </svg>
  ),
  dining: (props: IconProps) => (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M1.64288 28.5713H31.3572"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M31 21H2C2 12.7152 8.49256 6 16.5008 6C24.509 6 31 12.7152 31 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          id="Vector_3"
          d="M17 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  ),
  shoppingCart: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="shopping-cart-01">
        <path
          id="Icon"
          d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 72">
        <path
          id="Vector"
          d="M34.1782 20.3838C34.1782 12.9202 28.131 6.87305 20.6674 6.87305C13.2038 6.87305 7.15665 12.9202 7.15665 20.3838C7.15665 27.1272 12.0973 32.7168 18.5564 33.7312V24.2894H15.1242V20.3838H18.5564V17.4071C18.5564 14.0212 20.5721 12.151 23.6594 12.151C25.138 12.151 26.6841 12.4146 26.6841 12.4146V15.7379H24.98C23.302 15.7379 22.7785 16.7795 22.7785 17.8478V20.3838H26.5255L25.9263 24.2894H22.7785V33.7312C29.2375 32.7168 34.1782 27.1272 34.1782 20.3838Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 71">
        <path
          id="Vector"
          d="M20.435 18.672H31.7198C31.8284 19.2786 31.9061 19.8704 31.9061 20.6643C31.9061 27.4822 27.3296 32.3386 20.434 32.3386C13.8184 32.3386 8.4798 27.0001 8.4798 20.3844C8.4798 13.7687 13.8184 8.43018 20.434 8.43018C23.6557 8.43018 26.3643 9.61364 28.4503 11.5592L25.1968 14.6882C24.3092 13.8325 22.7531 12.8363 20.434 12.8363C16.3556 12.8363 13.0244 16.2144 13.0244 20.3854C13.0244 24.5564 16.3556 27.9345 20.434 27.9345C25.1659 27.9345 26.9401 24.5415 27.221 22.7822H20.434V18.673L20.435 18.672Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 69">
        <g id="Group 26">
          <g id="Group">
            <path
              id="Vector"
              d="M8.58432 14.483C8.58432 12.9181 9.20598 11.4173 10.3125 10.3107C11.4191 9.20418 12.9199 8.58252 14.4848 8.58252H26.2858C27.8507 8.58252 29.3515 9.20418 30.458 10.3107C31.5646 11.4173 32.1863 12.9181 32.1863 14.483V26.284C32.1863 27.8489 31.5646 29.3497 30.458 30.4562C29.3515 31.5628 27.8507 32.1845 26.2858 32.1845H14.4848C12.9199 32.1845 11.4191 31.5628 10.3125 30.4562C9.20598 29.3497 8.58432 27.8489 8.58432 26.284V14.483Z"
              stroke="currentColor"
              strokeWidth="2.14563"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M27.0227 13.7456V13.7604M15.9593 20.3837C15.9593 21.5573 16.4255 22.6829 17.2554 23.5129C18.0853 24.3428 19.2109 24.809 20.3846 24.809C21.5583 24.809 22.6839 24.3428 23.5138 23.5129C24.3437 22.6829 24.81 21.5573 24.81 20.3837C24.81 19.21 24.3437 18.0844 23.5138 17.2544C22.6839 16.4245 21.5583 15.9583 20.3846 15.9583C19.2109 15.9583 18.0853 16.4245 17.2554 17.2544C16.4255 18.0844 15.9593 19.21 15.9593 20.3837Z"
              stroke="currentColor"
              strokeWidth="2.14563"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  tripAdvisor: (props: IconProps) => (
    <svg
      width="33"
      height="27"
      viewBox="0 0 33 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="download (1) 1" clipPath="url(#clip0_109_828)">
        <path
          id="Vector"
          d="M9.46063 14.8344C9.46063 15.581 8.87416 16.1852 8.16163 16.1852C7.43569 16.1852 6.84832 15.582 6.84832 14.8344C6.84832 14.1015 7.4348 13.4983 8.16163 13.4983C8.87416 13.4983 9.46063 14.1015 9.46063 14.8344ZM25.5806 14.8206C25.5806 15.5673 24.9941 16.1714 24.2673 16.1714C23.5404 16.1714 22.954 15.5682 22.954 14.8206C22.954 14.073 23.5404 13.4845 24.2673 13.4845C24.9941 13.4845 25.5806 14.0739 25.5806 14.8206ZM11.0529 14.8344C11.0529 13.3116 9.8379 12.061 8.35652 12.061C6.86173 12.061 5.66018 13.3107 5.66018 14.8344C5.66018 16.3719 6.86173 17.6077 8.35652 17.6077C9.83701 17.6077 11.0529 16.3719 11.0529 14.8344ZM27.1594 14.8206C27.1594 13.2978 25.9578 12.0472 24.4631 12.0472C22.9826 12.0472 21.7667 13.2969 21.7667 14.8206C21.7667 16.3581 22.9817 17.594 24.4631 17.594C25.9578 17.594 27.1594 16.3581 27.1594 14.8206ZM12.2401 14.8344C12.2401 17.0468 10.5084 18.8427 8.35652 18.8427C6.20463 18.8427 4.45952 17.0468 4.45952 14.8344C4.45952 12.6357 6.20553 10.8398 8.35652 10.8398C10.5075 10.8398 12.2401 12.6357 12.2401 14.8344ZM28.361 14.8206C28.361 17.033 26.6149 18.8151 24.464 18.8151C22.3264 18.8151 20.5804 17.0339 20.5804 14.8206C20.5804 12.6072 22.3264 10.826 24.464 10.826C26.6149 10.826 28.361 12.6072 28.361 14.8206ZM14.8944 14.8629C14.8944 11.1994 12.0032 8.2246 8.44056 8.2246C4.89222 8.2246 2.00099 11.1984 2.00099 14.8629C2.00099 18.5273 4.89222 21.5012 8.44056 21.5012C12.0023 21.5012 14.8944 18.5273 14.8944 14.8629ZM24.2261 6.63009C21.9214 5.59559 19.3234 5.03558 16.4599 5.03558C13.5963 5.03558 10.7462 5.59559 8.45576 6.61629C12.8838 6.63101 16.4599 10.3092 16.4599 14.8638C16.4599 10.3957 19.9099 6.75883 24.2261 6.63009ZM30.9169 14.8629C30.9169 11.1994 28.0391 8.2246 24.4774 8.2246C20.9156 8.2246 18.0235 11.1984 18.0235 14.8629C18.0235 18.5273 20.9147 21.5012 24.4774 21.5012C28.04 21.5012 30.9169 18.5273 30.9169 14.8629ZM27.2014 6.73124H32.5512C31.7126 7.73723 31.0984 9.08714 30.9447 10.0214C31.9084 11.386 32.4815 13.0532 32.4815 14.8638C32.4815 19.4184 28.8911 23.0966 24.4774 23.0966C21.9634 23.0966 19.7275 21.9186 18.2613 20.0648C18.2613 20.0648 17.6051 20.8694 16.459 22.6368C16.2632 22.2202 15.2717 20.7692 14.6709 20.051C13.2039 21.9186 10.9554 23.0975 8.44056 23.0975C4.02682 23.0975 0.436463 19.4193 0.436463 14.8647C0.436463 13.0541 1.00953 11.3879 1.97327 10.0223C1.8195 9.08806 1.20531 7.73815 0.36673 6.73216H5.46529C8.20365 4.84983 12.1847 3.67188 16.459 3.67188C20.7332 3.67188 24.4631 4.84983 27.2014 6.73216V6.73124Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_109_828">
          <rect
            width="32.1845"
            height="25.7476"
            fill="white"
            transform="translate(0.367706 0.509766)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  badge: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="126"
      height="126"
      viewBox="0 0 126 126"
      fill="none"
      {...props}
    >
      <path
        d="M64.8624 2.54398L70.3223 0.359997C72.0276 -0.328108 73.9873 -0.0139731 75.3934 1.16777L79.9109 4.92244C80.8982 5.74517 82.1697 6.16402 83.4562 6.07426L89.32 5.68533C91.16 5.56566 92.9102 6.46319 93.8974 8.01891L97.0388 12.9852C97.7269 14.0772 98.8039 14.8551 100.045 15.1692L105.745 16.6202C107.525 17.069 108.931 18.4751 109.38 20.2552L110.831 25.9545C111.145 27.1961 111.938 28.2881 113.015 28.9613L117.981 32.1026C119.537 33.0899 120.434 34.8401 120.315 36.68L119.926 42.5439C119.836 43.8303 120.255 45.1018 121.078 46.0891L124.832 50.6067C126.014 52.0277 126.313 53.9724 125.64 55.6777L123.456 61.1377C122.977 62.3344 122.977 63.6657 123.456 64.8624L125.64 70.3224C126.328 72.0277 126.014 73.9873 124.832 75.3934L121.078 79.911C120.255 80.8982 119.836 82.1698 119.926 83.4562L120.315 89.3201C120.434 91.16 119.537 92.9102 117.981 93.8975L113.015 97.0388C111.923 97.7269 111.145 98.8039 110.831 100.046L109.38 105.745C108.931 107.525 107.525 108.931 105.745 109.38L100.045 110.831C98.8039 111.145 97.7119 111.938 97.0388 113.015L93.8974 117.981C92.9102 119.537 91.16 120.434 89.32 120.315L83.4562 119.926C82.1697 119.836 80.8982 120.255 79.9109 121.078L75.3934 124.832C73.9723 126.014 72.0276 126.313 70.3223 125.64L64.8624 123.456C63.6657 122.977 62.3343 122.977 61.1376 123.456L55.6777 125.64C53.9724 126.328 52.0128 126.014 50.6066 124.832L46.0891 121.078C45.1018 120.255 43.8303 119.836 42.5438 119.926L36.68 120.315C34.84 120.434 33.0899 119.537 32.1026 117.981L28.9612 113.015C28.2731 111.923 27.1961 111.145 25.9545 110.831L20.2552 109.38C18.4751 108.931 17.069 107.525 16.6202 105.745L15.1692 100.046C14.8551 98.8039 14.0622 97.712 12.9852 97.0388L8.01888 93.8975C6.46316 92.9102 5.56563 91.16 5.6853 89.3201L6.07423 83.4562C6.16399 82.1698 5.74514 80.8982 4.9224 79.911L1.16774 75.3934C-0.0140036 73.9723 -0.31318 72.0277 0.359967 70.3224L2.54395 64.8624C3.02264 63.6657 3.02264 62.3344 2.54395 61.1377L0.359967 55.6777C-0.328139 53.9724 -0.0140036 52.0128 1.16774 50.6067L4.9224 46.0891C5.74514 45.1018 6.16399 43.8303 6.07423 42.5439L5.6853 36.68C5.56563 34.8401 6.46316 33.0899 8.01888 32.1026L12.9852 28.9613C14.0772 28.2731 14.8551 27.1961 15.1692 25.9545L16.6202 20.2552C17.069 18.4751 18.4751 17.069 20.2552 16.6202L25.9545 15.1692C27.1961 14.8551 28.2881 14.0623 28.9612 12.9852L32.1026 8.01891C33.0899 6.46319 34.84 5.56566 36.68 5.68533L42.5438 6.07426C43.8303 6.16402 45.1018 5.74517 46.0891 4.92244L50.6066 1.16777C52.0277 -0.0139731 53.9724 -0.313149 55.6777 0.359997L61.1376 2.54398C62.3343 3.02267 63.6657 3.02267 64.8624 2.54398Z"
        fill="currentColor"
      />
    </svg>
  ),
  star: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 21.4694L11.16 24.3921C11.0178 24.4623 10.8858 24.4908 10.764 24.4774C10.6431 24.4632 10.5253 24.4214 10.4107 24.3521C10.2951 24.281 10.208 24.1805 10.1493 24.0508C10.0907 23.921 10.0853 23.7792 10.1333 23.6254L11.4213 18.1454L7.16133 14.4521C7.04133 14.3543 6.96221 14.2374 6.92399 14.1014C6.88577 13.9654 6.89421 13.8352 6.94933 13.7108C7.00444 13.5863 7.07777 13.4841 7.16933 13.4041C7.26177 13.3268 7.38621 13.2743 7.54266 13.2468L13.164 12.7561L15.356 7.56677C15.4164 7.4201 15.5035 7.31432 15.6173 7.24943C15.7311 7.18454 15.8587 7.1521 16 7.1521C16.1413 7.1521 16.2693 7.18454 16.384 7.24943C16.4987 7.31432 16.5853 7.4201 16.644 7.56677L18.836 12.7561L24.456 13.2468C24.6133 13.2734 24.7382 13.3263 24.8307 13.4054C24.9231 13.4837 24.9969 13.5854 25.052 13.7108C25.1062 13.8352 25.1142 13.9654 25.076 14.1014C25.0378 14.2374 24.9587 14.3543 24.8387 14.4521L20.5787 18.1454L21.8667 23.6254C21.9164 23.7774 21.9115 23.9188 21.852 24.0494C21.7924 24.1801 21.7049 24.2805 21.5893 24.3508C21.4755 24.4219 21.3578 24.4641 21.236 24.4774C21.1151 24.4908 20.9835 24.4623 20.8413 24.3921L16 21.4694Z"
        fill="currentColor"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3.5 20.5L9.52574 14.4743M9.52574 14.4743C8.3624 13.3109 7.64286 11.7038 7.64286 9.92857C7.64286 6.37817 10.521 3.5 14.0714 3.5C17.6218 3.5 20.5 6.37817 20.5 9.92857C20.5 13.479 17.6218 16.3571 14.0714 16.3571C12.2962 16.3571 10.6891 15.6376 9.52574 14.4743Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  add: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" rx="12" fill="#BC995D" />
      <path
        d="M7 12L17 12M12 17L12 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ),
  remove: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" rx="12" fill="#BC995D" />
      <path
        d="M7 12L17 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pencil: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M18 11.5002L19.5858 9.9144C20.3668 9.13335 20.3668 7.86702 19.5858 7.08597L17.4142 4.9144C16.6332 4.13335 15.3668 4.13335 14.5858 4.9144L13 6.50019M18 11.5002L9 20.5002H4V15.5002L13 6.50019M18 11.5002L13 6.50019"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  message: (props: IconProps) => <MessageSquare {...props} />,
  notification: (props: IconProps) => <Bell {...props} />,
  interview: (props: IconProps) => <Video {...props} />,
  settings: (props: IconProps) => <Settings {...props} />,
  logout: (props: IconProps) => <LogOut {...props} />,
  heart: (props: IconProps) => <Heart {...props} />,
  image: (props: IconProps) => <ImageIcon {...props} />,
  edit: (props: IconProps) => <Pencil {...props} />,
  plus: (props: IconProps) => <Plus {...props} />,
  video: (props: IconProps) => <FileVideo {...props} />,
  info: (props: IconProps) => <Info {...props} />,
  comment: (props: IconProps) => <MessageCircle {...props} />,
  deleteAccount: (props: IconProps) => <UserX {...props} />,
  close: (props: IconProps) => <X {...props} />,
  camera: (props: IconProps) => <Camera {...props} />,
  talent: (props: IconProps) => <Lightbulb {...props} />,
  business: (props: IconProps) => <Handshake {...props} />,
  advertisement: (props: IconProps) => <Megaphone {...props} />,
  mail: (props: IconProps) => <Mail {...props} />,
  target: (props: IconProps) => <Target {...props} />,
  user: (props: IconProps) => <User {...props} />,
  delete: (props: IconProps) => <Trash {...props} />,
};
