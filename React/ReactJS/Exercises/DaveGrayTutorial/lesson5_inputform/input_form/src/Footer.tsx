const Footer = ({ length }: {length: number}) => {
  return (
    <footer
      style={{
        
      }}>
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
