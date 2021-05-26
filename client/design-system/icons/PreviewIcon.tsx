import * as React from 'react';

function SvgPreviewIcon(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <mask id="PreviewIcon_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.972 8.038C6.867 8.772 5.71 9.89 4.536 11.52a.777.777 0 00-.003.926c1.577 2.074 3.907 4.097 6.478 4.612 1.258.252 2.596.149 3.989-.51 1.405-.666 2.92-1.924 4.464-4.067.21-.292.201-.666.003-.927-.86-1.131-1.945-2.248-3.17-3.112a5 5 0 11-8.325-.404zm13.087 2.306c-1.706-2.244-4.415-4.71-7.677-5.363-1.659-.332-3.436-.189-5.237.664-1.789.847-3.546 2.367-5.232 4.705a2.776 2.776 0 00.028 3.306c1.706 2.244 4.415 4.71 7.677 5.363 1.659.332 3.436.189 5.237-.664 1.789-.847 3.546-2.367 5.232-4.705a2.776 2.776 0 00-.028-3.306zM11.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.972 8.038C6.867 8.772 5.71 9.89 4.536 11.52a.777.777 0 00-.003.926c1.577 2.074 3.907 4.097 6.478 4.612 1.258.252 2.596.149 3.989-.51 1.405-.666 2.92-1.924 4.464-4.067.21-.292.201-.666.003-.927-.86-1.131-1.945-2.248-3.17-3.112a5 5 0 11-8.325-.404zm13.087 2.306c-1.706-2.244-4.415-4.71-7.677-5.363-1.659-.332-3.436-.189-5.237.664-1.789.847-3.546 2.367-5.232 4.705a2.776 2.776 0 00.028 3.306c1.706 2.244 4.415 4.71 7.677 5.363 1.659.332 3.436.189 5.237-.664 1.789-.847 3.546-2.367 5.232-4.705a2.776 2.776 0 00-.028-3.306zM11.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="#000"
      />
      <path
        d="M7.972 8.038l1.61 1.186-2.718-2.852 1.108 1.666zM4.536 11.52l1.622 1.169-1.622-1.17zm-.003.926l-1.592 1.21 1.592-1.21zm6.478 4.612l.393-1.961-.393 1.96zm3.989-.51l.855 1.807L15 16.547zm4.464-4.067l1.623 1.169-1.623-1.17zm.003-.927l-1.592 1.21 1.592-1.21zm-3.17-3.112l1.153-1.634-2.87 2.659 1.717-1.025zm-2.915-3.46l.393-1.962-.393 1.961zm7.677 5.362l-1.592 1.21 1.592-1.21zm-12.914-4.7L9 7.453l-.855-1.807zM2.913 10.35l1.623 1.17-1.623-1.17zm.028 3.306l1.592-1.21-1.592 1.21zm7.677 5.363l.393-1.961-.393 1.96zm5.237-.664L15 16.547l.856 1.808zm5.232-4.705l1.622 1.17-1.622-1.17zM6.864 6.372c-1.346.896-2.668 2.2-3.95 3.978l3.244 2.339c1.067-1.48 2.058-2.412 2.921-2.986l-2.215-3.33zm-3.95 3.978a2.776 2.776 0 00.027 3.306l3.184-2.42c.35.459.322 1.052.033 1.453L2.913 10.35zm.027 3.306c1.706 2.244 4.415 4.71 7.677 5.363l.786-3.922c-1.88-.377-3.831-1.957-5.28-3.862l-3.183 2.421zm7.677 5.363c1.659.332 3.437.189 5.237-.664l-1.711-3.615c-.985.466-1.883.528-2.74.357l-.786 3.922zm5.237-.664c1.789-.847 3.546-2.367 5.232-4.705l-3.245-2.339c-1.405 1.949-2.676 2.945-3.698 3.429l1.711 3.615zm5.232-4.705a2.776 2.776 0 00-.028-3.306l-3.184 2.42a1.224 1.224 0 01-.033-1.453l3.245 2.339zm-.028-3.306c-.959-1.262-2.186-2.532-3.61-3.536l-2.305 3.268c1.027.725 1.97 1.687 2.731 2.689l3.184-2.421zM19 11c0-1.306-.36-2.533-.986-3.583l-3.435 2.05c.267.447.421.969.421 1.533h4zm-7 7a7 7 0 007-7h-4a3 3 0 01-3 3v4zm-7-7a7 7 0 007 7v-4a3 3 0 01-3-3H5zm1.361-4.149A6.978 6.978 0 005 11h4c0-.668.216-1.28.582-1.776L6.362 6.85zm6.628.091c2.57.515 4.9 2.538 6.478 4.612l3.184-2.42C20.817 6.72 17.73 3.811 13.774 3.02l-.785 3.922zM9 7.452c1.393-.659 2.73-.762 3.99-.51l.784-3.922c-2.058-.412-4.276-.229-6.485.817L9 7.452zM4.536 11.52C6.08 9.376 7.596 8.117 9 7.453L7.29 3.836C5.117 4.866 3.116 6.648 1.29 9.18l3.245 2.34zm-.003.926a.777.777 0 01.003-.926L1.29 9.18c-1.2 1.665-1.246 3.972.058 5.687l3.184-2.421zm6.478 4.612c-2.57-.515-4.9-2.537-6.478-4.612l-3.184 2.42c1.834 2.413 4.922 5.322 8.877 6.114l.785-3.922zm3.989-.51c-1.393.659-2.73.762-3.99.51l-.784 3.922c2.058.412 4.276.229 6.485-.817L15 16.547zm4.464-4.067c-1.545 2.143-3.06 3.401-4.464 4.066l1.711 3.616c2.172-1.029 4.173-2.811 5.998-5.343l-3.245-2.34zm.003-.927a.777.777 0 01-.003.926l3.245 2.34c1.2-1.665 1.246-3.972-.058-5.687l-3.184 2.421zM10 13a3.5 3.5 0 003.5-3.5h-4A.5.5 0 0110 9v4zM6.5 9.5A3.5 3.5 0 0010 13V9a.5.5 0 01.5.5h-4zM10 6a3.5 3.5 0 00-3.5 3.5h4a.5.5 0 01-.5.5V6zm3.5 3.5A3.5 3.5 0 0010 6v4a.5.5 0 01-.5-.5h4z"
        fill="#000"
        mask="url(#PreviewIcon_svg__a)"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPreviewIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
