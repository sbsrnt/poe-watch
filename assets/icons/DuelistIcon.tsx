import * as React from 'react';

function SvgDuelistIcon(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.013 14A631.884 631.884 0 010 9.704V0h24v24H12c-3.037 0-5.306 0-7-.006V24H0V14h.013zm15.32-12.436c0 .074-.09.046-.2-.062-.11-.108-.39-.194-.625-.19-.398.004-.405.019-.12.231.29.215.286.23-.083.292-.36.06-.353.075.112.199.654.175.952.415.847.684-.053.134.078.258.339.322.312.076.403.186.343.41-.059.22.008.305.236.305.175 0 .318.079.318.175 0 .242-.43.64-.697.647-.12.002-.364.112-.54.243-.307.227-.297.243.21.342.436.085.497.146.336.336-.128.151-.357.196-.662.13-.257-.055-.602-.024-.766.07-.235.134-.245.174-.048.188l.706.05c.25.019.538.115.639.214.198.194-.352.424-2.3.96-.676.187-1.071.388-1.133.577-.051.16-.296.357-.544.438l-.45.147.666.444c.367.244.922.606 1.234.803 1.019.643 1.177 1.012.992 2.318-.089.628-.12 1.63-.07 2.226l.092 1.084-.54.08c-.298.043-.567.014-.598-.067-.032-.08-.277-.258-.545-.394-.44-.223-.498-.221-.59.015-.126.32.26 1.066.605 1.174.14.043.478.18.753.303.499.224.498.225-.388.228l-.887.004.495.408c.272.224.61.408.752.408.142 0 .305.074.361.163.065.103-.32.164-1.04.164-1.114 0-1.543.164-1.543.59 0 .305 1.326 1.19 1.956 1.305.663.122 1.184-.265 1.644-1.221.157-.326.453-.813.658-1.082.205-.27.686-1.105 1.069-1.856.383-.752.844-1.521 1.024-1.71.44-.464.829-1.757.608-2.026-.163-.2-.055-.415.495-.987.344-.357.834-2.171.937-3.462.062-.776.044-1.075-.047-.817l-.144.409-.017-.384c-.025-.584-.521-2.147-.682-2.147-.286 0-.347.919-.092 1.398.28.526.37 2.294.095 1.868-.087-.134-.157-.465-.155-.735.003-.92-.106-1.14-.596-1.197-.257-.03-.513.02-.57.11-.057.09-.308.213-.56.275-.364.09-.456.056-.456-.168 0-.192.085-.248.273-.177.421.158 1.226-.26 1.229-.638.001-.18.047-.492.102-.693.068-.248.016-.397-.162-.464-.38-.143-1.776-1.545-1.776-1.785 0-.111-.112-.295-.25-.406-.137-.112-.25-.143-.25-.07zM5.167 5.38c0-.486 1.038-2.021 1.865-2.758.647-.576.607-.601-.25-.158-.692.358-1.445 1.39-1.884 2.582-.152.412-.598 1.447-.991 2.3-1.048 2.273-1.494 3.866-1.259 4.501.103.278.151.867.108 1.308-.044.442-.036.663.016.493.053-.171.238-.56.412-.862.174-.304.318-.789.32-1.078.002-.289.073-.817.158-1.174.1-.422.095-.685-.014-.75-.249-.151-.021-.872.793-2.512.4-.804.726-1.655.726-1.892zm10.5 5.723c-.215-.147-.194-.218.143-.495.391-.321.96-.402 1.618-.228.272.071.33.19.273.569-.073.484-.262.615-.451.315-.057-.09-.38-.124-.718-.076-.339.048-.728.01-.865-.085zm-3.886 1.82c.792-.683 1.323-1.86.97-2.148-.115-.094-.563-.196-.994-.227-.699-.052-.776-.025-.703.248.099.37-.259.409-.554.06-.297-.35-.541-.302-.417.082.061.187.03.326-.072.326-.312 0-.193 1.08.169 1.53.617.77.838.787 1.601.129zm-1.023 9.259c.124-.123.49-.72.811-1.326.343-.647.502-1.1.383-1.096-.111.004-.299.114-.417.245s-.4.239-.625.239c-.596 0-1.133.572-.914.973.094.171.17.46.17.64 0 .433.31.603.592.325z"
        fill="#000"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDuelistIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
