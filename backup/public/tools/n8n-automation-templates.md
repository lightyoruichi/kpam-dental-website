# N8N Automation Templates Prompt
*Build ready-to-use automation workflows that connect your tools and scale your operations*

---

## 🎯 What You'll Discover

You'll create specific N8N automation templates that eliminate 5-10 hours of manual work per week and ensure no leads or customers fall through the cracks. This matters because most businesses lose 20-30% of potential revenue due to manual processes and poor tool integration.

---

## 📊 Data Sources to Check

**Current Tool Stack:**
- CRM system (HubSpot, Salesforce, Pipedrive)
- Email marketing platform (Mailchimp, ConvertKit, ActiveCampaign)
- Communication tools (Slack, Discord, Microsoft Teams)
- Analytics and tracking tools (Google Analytics, Facebook Pixel)

**Manual Processes:**
- Tasks your team does repeatedly (data entry, notifications, follow-ups)
- Information that gets copied between different tools
- Alerts or updates that you manually send or check

**Workflow Pain Points:**
- Data that exists in one tool but not others
- Manual follow-up sequences or reminders
- Reporting that requires pulling data from multiple sources

---

## 📝 Data Collection Steps

**Step 1: Workflow Audit (15 minutes)**
1. List your 5 most time-consuming manual tasks
2. Note which tools you use and how data flows between them
3. Identify where information gets lost or delayed
4. Map your current lead/customer journey from first touch to close
5. Count how many times data gets manually entered in different systems

**Step 2: Integration Opportunity Mapping (10 minutes)**
1. Check which tools have N8N connectors (browse N8N app directory)
2. Note where you currently copy/paste data between tools
3. Identify notification gaps (when things happen but no one knows)
4. List follow-up sequences that happen manually
5. Find reporting tasks that require manual data compilation

**Step 3: Workflow Priority Assessment (10 minutes)**
1. Estimate time savings for each automation opportunity
2. Rate impact on customer experience (High/Medium/Low)
3. Assess setup complexity (Simple/Moderate/Complex)
4. Identify quick wins (high impact, low complexity)
5. Note workflows that directly impact revenue or retention

---

## 🧠 Analysis Questions

**Automation Opportunities:**
- Which manual tasks happen most frequently in your business?
- Where does information get stuck between different tools?
- Which processes, if automated, would have the biggest impact on revenue?
- What notifications would help your team respond faster to opportunities?

**Tool Integration Assessment:**
- Which of your tools can connect to N8N?
- Where do you currently lose leads due to manual handoffs?
- Which data needs to flow in real-time vs. batch updates?
- What triggers should initiate automated workflows?

**Workflow Design Priorities:**
- Which automations would save the most time weekly?
- What workflows would improve customer experience most?
- Which integrations would reduce human error or delays?
- What automations would help you scale without hiring?

---

## ⚡ Action Items

**Priority Automation Templates:**

**Template 1: Lead Enrichment & CRM Sync**
```json
{
  "name": "Lead Enrichment Pipeline",
  "trigger": "New lead form submission",
  "workflow": [
    "1. Capture form data from website",
    "2. Enrich lead with company data (Clearbit/Hunter)",
    "3. Score lead based on criteria",
    "4. Add to CRM with tags and segments",
    "5. Notify sales team in Slack",
    "6. Add to appropriate email sequence"
  ],
  "estimated_time_saved": "2 hours/week",
  "impact": "Faster lead response, better qualification"
}
```

**Template 2: Customer Onboarding Automation**
```json
{
  "name": "Customer Onboarding Flow",
  "trigger": "New customer payment confirmed",
  "workflow": [
    "1. Create customer record in CRM",
    "2. Send welcome email with onboarding steps",
    "3. Create Slack channel for customer",
    "4. Add to onboarding email sequence",
    "5. Schedule check-in tasks for team",
    "6. Track onboarding progress"
  ],
  "estimated_time_saved": "3 hours/week",
  "impact": "Consistent onboarding, no missed follow-ups"
}
```

**Template 3: Support Ticket Routing**
```json
{
  "name": "Smart Support Routing",
  "trigger": "New support ticket created",
  "workflow": [
    "1. Analyze ticket content for keywords",
    "2. Determine priority and category",
    "3. Route to appropriate team member",
    "4. Send Slack notification with context",
    "5. Update customer record with ticket",
    "6. Set follow-up reminders"
  ],
  "estimated_time_saved": "1.5 hours/week",
  "impact": "Faster response times, better routing"
}
```

**Template 4: Social Media Monitoring & Response**
```json
{
  "name": "Social Mention Response",
  "trigger": "Brand mention on social media",
  "workflow": [
    "1. Monitor social platforms for mentions",
    "2. Analyze sentiment (positive/negative/neutral)",
    "3. Identify high-priority mentions",
    "4. Create task for team response",
    "5. Log mention in CRM if customer",
    "6. Track response metrics"
  ],
  "estimated_time_saved": "2.5 hours/week",
  "impact": "Better brand management, faster responses"
}
```

**N8N Workflow JSON Templates:**

**Basic Lead Capture & Notification:**
```json
{
  "meta": {
    "instanceId": "your-instance-id"
  },
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "lead-capture",
        "responseMode": "responseNode"
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [200, 300]
    },
    {
      "parameters": {
        "channel": "#sales",
        "text": "New lead: {{$json[\"name\"]}} - {{$json[\"email\"]}}",
        "username": "LeadBot"
      },
      "name": "Slack",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 1,
      "position": [600, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Slack",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

**Implementation Plan:**

**Week 1: Setup & Basic Automation**
- [ ] Set up N8N instance (cloud or self-hosted)
- [ ] Connect your top 3 most-used tools
- [ ] Implement Template 1 (Lead Enrichment)
- [ ] Test workflow with sample data

**Week 2: Customer Journey Automation**
- [ ] Implement Template 2 (Customer Onboarding)
- [ ] Set up proper error handling and notifications
- [ ] Create workflow documentation
- [ ] Train team on new automated processes

**Week 3: Support & Monitoring**
- [ ] Implement Template 3 (Support Routing)
- [ ] Add Template 4 (Social Monitoring)
- [ ] Set up workflow monitoring and alerts
- [ ] Optimize based on initial usage data

**Week 4: Advanced Workflows & Scaling**
- [ ] Create custom workflows for your specific needs
- [ ] Add data transformation and enrichment steps
- [ ] Implement backup and fallback mechanisms
- [ ] Plan additional automation opportunities

**Workflow Success Metrics:**
- **Time Saved:** Track hours saved per week through automation
- **Error Reduction:** Monitor data quality and manual error decrease
- **Response Speed:** Measure faster response times to leads/customers
- **Process Consistency:** Ensure no steps are missed in automated workflows

**Common N8N Workflow Building Blocks:**

**Triggers:**
- Webhook (form submissions, API calls)
- Schedule (time-based automations)
- Email received (monitoring inbox)
- File changes (document updates)

**Actions:**
- CRM updates (create/update records)
- Email sending (notifications, sequences)
- Slack messages (team alerts)
- Data enrichment (external APIs)

**Expected Results:**
- 5-10 hours saved per week through automation
- 50% faster response times to leads and customers
- 90% reduction in manual data entry errors
- Consistent execution of all critical business processes

---

*Complete this workflow audit in 35 minutes and build your first automation template to start saving hours of manual work immediately.*