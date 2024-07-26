import styled from "styled-components";

export const buttonStyles = {
  filled: {
    primary: {
      color: "White",
      borderColor: "Primary",
      backgroundColor: "Primary",
      disabled: "Gray",
      hoverBackground: "BlueHover",
    },

    gray: {
      color: "White",
      borderColor: "Gray",
      backgroundColor: "Gray",
      disabled: "Black24",
      hoverBackground: "GrayHover",
    },

    danger: {
      color: "White",
      borderColor: "Danger",
      backgroundColor: "Danger",
      disabled: "Gray",
      hoverBackground: "DangerHover",
    },
  },
};

interface OptionsType {
  size: "sm" | "md" | "lg";
  type: "filled";
  skin: "primary" | "gray" | "danger";
  block?: boolean;
  marginbottom?: string;
}

export const Button = styled("button")<{
  $options: OptionsType;
  disabled?: boolean;
}>`
  ${(props) => {
    const { $options, theme, disabled } = props;
    const { size, type, skin, marginbottom, block } = $options;
    return `
      font-family: 'Inter',sans-serif;
      cursor: pointer;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content:center;
      background-color: ${
        !disabled
          ? theme.colors[buttonStyles[type][skin].backgroundColor]
          : theme.colors[buttonStyles[type][skin].disabled]
      };
      font-size: ${theme.button.size[size].fontSize};
      color: ${theme.colors[buttonStyles[type][skin].color]};
      border-radius: ${theme.button.size[size].borderRadius};
      padding:17px;
      min-width:${theme.button.size[size].minWidth};
      text-decoration: none;
      letter-spacing: 0.2px;
      font-weight:500;
      ${block ? `width: 100%;` : ``}
      text-align: center;
      transition: all .2s ease-in-out;
      margin-bottom: ${marginbottom ? marginbottom : "0px"};
       &:hover {
       background-color:${
         theme.colors[buttonStyles[type][skin].hoverBackground]
       };
          
        
      }
    `;
  }}
`;
