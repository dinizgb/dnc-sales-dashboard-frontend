type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
