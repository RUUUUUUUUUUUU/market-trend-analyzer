export function analyzeDataset(name: string) {

  let category = "General"
  let score = Math.floor(Math.random() * 30) + 70

  if (name.toLowerCase().includes("crypto")) {
    category = "Finance"
    score = 90
  }

  if (name.toLowerCase().includes("ai")) {
    category = "AI"
    score = 85
  }

  if (name.toLowerCase().includes("amazon")) {
    category = "E-commerce"
    score = 82
  }

  return {
    category,
    trendScore: score,
    storage: "Pending"
  }

}