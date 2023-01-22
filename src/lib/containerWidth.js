export default function containerWidth(windowSize) {
  if (windowSize <= 1440) {
    return "lg";
  } else {
    return "xl";
  }
}
