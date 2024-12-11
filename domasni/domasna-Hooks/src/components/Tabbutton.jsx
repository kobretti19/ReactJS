export function TabButton({ children, ...props }) {
  return (
    <li>
      <button className={props.selected && "active"} {...props}>
        {children}
      </button>
    </li>
  );
}
