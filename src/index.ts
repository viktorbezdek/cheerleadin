#!/usr/bin/env node

import { main } from "./app"

;(async () => {
  try {
    await main()
  } catch (error) {
    console.error("An unhandled error occurred:", error)
    process.exit(1)
  }
})()
