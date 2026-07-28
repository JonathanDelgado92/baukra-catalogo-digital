import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1d1d1b",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            margin: 11,
            width: 42,
            height: 42,
            background: "#42ab38",
            borderRadius: 9,
          }}
        />
      </div>
    ),
    size,
  );
}
