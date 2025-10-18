// PostHog utility functions for custom event tracking
// Use these functions to send custom events from your components

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
      identify: (distinctId: string, properties?: Record<string, any>) => void;
      reset: () => void;
      getFeatureFlag: (key: string) => boolean | string | undefined;
      isFeatureEnabled: (key: string) => boolean;
    };
  }
}

/**
 * Send a custom event to PostHog
 * @param event - The event name
 * @param properties - Optional event properties
 */
export function trackEvent(event: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(event, properties);
  }
}

/**
 * Identify a user in PostHog
 * @param distinctId - Unique identifier for the user
 * @param properties - Optional user properties
 */
export function identifyUser(distinctId: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.identify(distinctId, properties);
  }
}

/**
 * Reset PostHog user session
 */
export function resetUser() {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.reset();
  }
}

/**
 * Check if a feature flag is enabled
 * @param key - Feature flag key
 * @returns boolean indicating if feature is enabled
 */
export function isFeatureEnabled(key: string): boolean {
  if (typeof window !== 'undefined' && window.posthog) {
    return window.posthog.isFeatureEnabled(key);
  }
  return false;
}

/**
 * Get feature flag value
 * @param key - Feature flag key
 * @returns feature flag value or undefined
 */
export function getFeatureFlag(key: string): boolean | string | undefined {
  if (typeof window !== 'undefined' && window.posthog) {
    return window.posthog.getFeatureFlag(key);
  }
  return undefined;
}

// Common event tracking functions for your MIMR Growth Lab
export const trackToolUsage = (toolName: string, action: string, properties?: Record<string, any>) => {
  trackEvent('tool_used', {
    tool_name: toolName,
    action,
    ...properties
  });
};

export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  trackEvent('page_viewed', {
    page_name: pageName,
    ...properties
  });
};

export const trackFormSubmission = (formName: string, properties?: Record<string, any>) => {
  trackEvent('form_submitted', {
    form_name: formName,
    ...properties
  });
};

export const trackESPScan = (domain: string, results: any) => {
  trackEvent('esp_scan_completed', {
    domain,
    results_count: results?.length || 0,
    ...results
  });
};

export const trackExternalAPICall = (service: string, endpoint: string, success: boolean, responseTime?: number) => {
  trackEvent('external_api_call', {
    service,
    endpoint,
    success,
    response_time: responseTime,
    timestamp: Date.now()
  });
};

// API Usage Analytics Functions
export const trackAPIUsage = (endpoint: string, method: string, responseTime?: number, statusCode?: number, additionalData?: Record<string, any>) => {
  trackEvent('api_usage', {
    endpoint,
    method,
    response_time: responseTime,
    status_code: statusCode,
    timestamp: Date.now(),
    ...additionalData
  });
};

export const trackAPIError = (endpoint: string, method: string, error: string, responseTime?: number, statusCode?: number) => {
  trackEvent('api_error', {
    endpoint,
    method,
    error,
    response_time: responseTime,
    status_code: statusCode,
    timestamp: Date.now()
  });
};

export const trackESPScanUsage = (domain: string, resultsCount: number, scanType: string, responseTime: number, success: boolean) => {
  trackEvent('esp_scan_usage', {
    domain,
    results_count: resultsCount,
    scan_type: scanType,
    response_time: responseTime,
    success,
    timestamp: Date.now()
  });
};

export const trackToolsAPIUsage = (endpoint: string, toolsCount: number, responseTime: number, userAgent?: string) => {
  trackEvent('tools_api_usage', {
    endpoint,
    tools_count: toolsCount,
    response_time: responseTime,
    user_agent: userAgent,
    timestamp: Date.now()
  });
};
