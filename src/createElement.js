
export default function createElement(tag, props, ...children) {
  return { tag, props: { ...props, children } };
}