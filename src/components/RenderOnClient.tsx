import dynamic from 'next/dynamic';

type ClientOnlyProps = { children: JSX.Element }
const RenderOnClient = (props: ClientOnlyProps) => {
  const { children } = props;

  return children;
};

export default dynamic(() => Promise.resolve(RenderOnClient), {
  ssr: false,
})
