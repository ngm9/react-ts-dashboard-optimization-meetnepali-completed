import { MetricResponse } from "./types";

let requestCounter = 0;

export function fetchMetric(id: number): Promise<MetricResponse> {
  requestCounter += 1;
  const currentCount = requestCounter;
  console.log("Fetching single metric", id, "request", currentCount);
  return new Promise(function (resolve) {
    const randomValue = Math.floor(Math.random() * 1000);
    const delay = 300 + Math.floor(Math.random() * 700);
    setTimeout(function () {
      resolve({ id: id, value: randomValue });
    }, delay);
  });
}

export function fetchMetricsBatch(ids: number[]): Promise<MetricResponse[]> {
  requestCounter += 1;
  const currentCount = requestCounter;
  console.log("Fetching metrics batch", ids.length, "items, request", currentCount);

  return new Promise(function (resolve) {
    const delay = 300 + Math.floor(Math.random() * 700);

    setTimeout(function () {
      const responses = ids.map(function (id) {
        const randomValue = Math.floor(Math.random() * 1000);
        return { id: id, value: randomValue };
      });

      resolve(responses);
    }, delay);
  });
}
