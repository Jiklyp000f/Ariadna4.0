// components/LazyLoad.tsx
import { Suspense } from "react";
import { Spin } from "antd";

export const LazyLoad = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    }
  >
    {children}
  </Suspense>
);
