# Universal AI Tool Executor
*Run any MIMR Growth Lab tool on ChatGPT, Claude, Gemini, Grok, or any AI platform*

---

## 🎯 **Quick Execute (Any AI Platform)**

**Copy this prompt template and paste into your preferred AI:**

```
EXECUTE MIMR GROWTH LAB TOOL

Tool: [TOOL_NAME]
Source: https://mimrgrowthlab.com/tools/[TOOL_SLUG].md

Instructions for AI:
1. Fetch and read the complete tool content from the URL above
2. Execute the tool exactly as written, following all steps
3. Guide me through each section systematically
4. At completion, suggest 2-3 related tools from the MIMR toolkit

My Business Context:
- Business Name: [YOUR_BUSINESS]
- Stage: [MVP/PMF/Scaling]  
- Industry: [YOUR_INDUSTRY]
- Current Challenge: [SPECIFIC_CHALLENGE]

BEGIN TOOL EXECUTION NOW.
```

---

## 🤖 **Platform-Specific Instructions**

### **ChatGPT/GPT-4**
- Paste the template above
- ChatGPT will automatically fetch and execute the tool
- Best for: Complex multi-step tools, data analysis

### **Claude (Anthropic)**
- Use: "Load and execute this business framework: [URL]"
- Add your business context
- Best for: Strategic analysis, detailed planning

### **Gemini (Google)**  
- Use: "Analyze this business tool and guide me through it: [URL]"
- Gemini excels at research and competitive analysis
- Best for: Market research, competitor analysis

### **Grok (X/Twitter)**
- Use: "Execute this growth tool step-by-step: [URL]"
- Add context about your business stage
- Best for: Quick insights, growth hacking

### **Perplexity**
- Use: "Research and execute this business framework: [URL]"
- Great for combining tool execution with real-time research
- Best for: Market validation, trend analysis

---

## 📱 **Mobile Quick Execute**

**Text yourself this format:**
```
MIMR Tool: [TOOL_NAME]
URL: [TOOL_URL]
Execute with my business: [BUSINESS_NAME]
Challenge: [CURRENT_CHALLENGE]
```

---

## ⚡ **One-Click Execute (Bookmarklet)**

**Save this bookmarklet to your browser:**
```javascript
javascript:(function(){const url=window.location.href;const title=document.querySelector('h1')?.textContent||document.title;const prompt=`EXECUTE MIMR GROWTH LAB TOOL\n\nTool: ${title}\nSource: ${url}\n\nInstructions: Fetch and execute this tool step-by-step. Guide me through each section.\n\nMy Business: [ADD_YOUR_CONTEXT]\n\nBEGIN EXECUTION.`;navigator.clipboard.writeText(prompt);alert('Tool prompt copied! Paste into any AI platform.');})();
```

**How to use:**
1. Visit any MIMR tool page
2. Click the bookmarklet
3. Paste into your preferred AI
4. Add your business context

---

## 🔄 **Tool Workflow Execution**

**For multi-tool workflows, use this format:**
```
EXECUTE MIMR WORKFLOW

Tools in sequence:
1. [TOOL_1_URL] - [Purpose]
2. [TOOL_2_URL] - [Purpose]  
3. [TOOL_3_URL] - [Purpose]

Execute each tool in order, using outputs from previous tools as inputs for the next.

My Business Context: [DETAILS]

START WITH TOOL 1.
```

---

## 🎯 **Best Practices**

**For Best Results:**
- ✅ Include specific business context
- ✅ Mention your current stage (MVP/PMF/Scaling)
- ✅ Be specific about your challenge
- ✅ Ask for actionable next steps
- ✅ Request related tool suggestions

**Avoid:**
- ❌ Generic business descriptions
- ❌ Skipping context details
- ❌ Not following tool steps
- ❌ Ignoring related tool suggestions

---

*This universal executor works with any AI platform and ensures consistent tool execution across the entire MIMR Growth Lab toolkit.*
