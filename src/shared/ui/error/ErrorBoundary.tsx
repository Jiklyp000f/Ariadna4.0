import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { AppButtonPrimary, AppButtonSecondary } from "@/shared/ui/button";
import style from "./styles.module.scss";
import { WarningOutlined } from "@ant-design/icons";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[Error caught by boundary]:", error, errorInfo);
    // Здесь можно отправить ошибку в сервис мониторинга
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          onReset={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

// Компонент ошибки с использованием хука useNavigate
const ErrorFallback = ({
  error,
  onReset,
}: {
  error: Error | null;
  onReset: () => void;
}) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    onReset();
    navigate("/");
  };

  const handleRetry = () => {
    onReset();
    window.location.reload();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.icon}>
        <WarningOutlined />
      </div>
      <h2 className={style.title}>Что-то пошло не так</h2>
      <p className={style.message}>
        {error?.message ||
          "Произошла непредвиденная ошибка. Пожалуйста, попробуйте позже."}
      </p>
      <div className={style.buttons}>
        <AppButtonPrimary onClick={handleGoHome}>
          Вернуться на главную
        </AppButtonPrimary>
        <AppButtonSecondary onClick={handleRetry}>
          Попробовать снова
        </AppButtonSecondary>
      </div>
    </div>
  );
};

export const ErrorBoundary = ErrorBoundaryClass;
