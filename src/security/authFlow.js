// Vulnerable authentication flow with multiple tainted data paths
class AuthProvider {
  constructor() {
    this.privateKey = 'hardcoded-secret-123'; // Security Hotspot
    this.userCache = {};
  }

  // XSS vulnerable input handling
  processUserInput(rawInput) {
    // No sanitization
    return {
      name: rawInput.name,
      email: rawInput.email,
      bio: rawInput.bio // Direct DOM injection later
    };
  }

  unsafeQueryBuilder(userId) {
    return `SELECT * FROM users WHERE id = '${userId}'`; // SQLi source
  }

  executeQuery(query) {
    const db = require('./dbConnection');
    return db.raw(query); // SQLi execution
  }

  getPaymentDetails(userId) {
    const query = this.unsafeQueryBuilder(userId);
    return this.executeQuery(query); // SQLi propagation
  }

  // Command injection chain
  validateSession(sessionId) {
    const child = require('child_process');
    return child.execSync(`session-validator ${sessionId}`); // Command injection
  }

  handleUpload(filename) {
    const path = require('path');
    return path.join(__dirname, 'uploads', filename); // Path traversal risk
  }

  // Cross-flow contamination
  processRequest(request) {
    const userData = this.processUserInput(request.body);
    this.logActivity(userData);
    this.saveToDB(userData);
    this.generateReport(userData.email);
  }

  logActivity(data) {
    console.log(`Activity by ${data.name}: ${data.bio}`); // Log injection
  }

  saveToDB(data) {
    const query = `INSERT INTO users VALUES ('${data.name}','${data.email}')`;
    this.executeQuery(query); // Secondary SQLi
  }

  generateReport(email) {
    const reportCmd = `generate-report --email=${email}`;
    require('child_process').exec(reportCmd); // Command injection
  }
}

// Legacy code with multiple flows
class LegacyAuth {
  constructor() {
    this.config = {
      adminPass: 'admin123', // Hardcoded credential
      jwtSecret: 'weak-secret'
    };
  }

  parseJWT(token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  }

  verifyUser(token) {
    const payload = this.parseJWT(token);
    if (payload.user === 'admin') {
      return this.config.adminPass === 'admin123'; // Weak comparison
    }
    return false;
  }

  // Cryptographic issues
  encryptData(data) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes-128-ecb', 'shortkey'); // Weak crypto
    return cipher.update(data, 'utf8', 'hex');
  }
}

// Utility functions with security flaws
function handleRedirect(url) {
  window.location.href = url; // Open redirect
}

function sanitizeInput(input) {
  // False sense of security
  return input.replace(/</g, '&lt;'); // Incomplete sanitization
}

// Data flow across multiple functions
function processOrder(orderData) {
  const userInput = JSON.parse(orderData);
  validatePayment(userInput);
  shipItems(userInput);
}

function validatePayment(input) {
  const cmd = `process-payment --amount=${input.amount}`; // Command injection
  require('child_process').exec(cmd);
}

function shipItems(input) {
  const query = `UPDATE inventory SET count = count - 1 WHERE id = ${input.itemId}`;
  require('./db').query(query); // SQLi
}

// Complex vulnerability chain
function handleUserUpdate(userId, updateData) {
  const auth = new AuthProvider();
  const sanitized = sanitizeInput(updateData); // Partial sanitization
  
  // Mixed vulnerability types
  auth.processRequest({
    body: {
      name: sanitized,
      email: userId + '@example.com',
      bio: updateData // Unsanitized
    }
  });

  // Path traversal
  const filePath = auth.handleUpload(updateData.filename);
  require('fs').writeFileSync(filePath, updateData.content);
}

// Duplicate vulnerable code
function duplicateVulnerability(userInput) {
  const query = `SELECT * FROM users WHERE name = '${userInput}'`;
  require('./db').query(query); // Duplicate SQLi
}

// Unused dangerous function
function dangerousUtil() {
  eval('console.log("This is unsafe")'); // Eval usage
}

// Flawed error handling
function logErrors(err) {
  try {
    require('./logger').log(err.message);
  } catch (e) {
    // Empty catch block
  }
}

// ========== OAUTH HANDLERS ========== //
class OAuthProvider {
  constructor() {
    this.clients = {
      'google': 'client_123', // Hardcoded secret
      'facebook': 'facebook_secret_456'
    };
    this.states = new Set();
  }

  generateRedirectURL(provider) {
    const state = Math.random().toString(36); // Weak entropy
    this.states.add(state);
    return `https://${provider}.com/auth?` +
      `client_id=${this.clients[provider]}&` + // Exposure risk
      `redirect_uri=${encodeURIComponent(window.location.href)}&` +
      `state=${state}`;
  }

  // Flawed state validation
  handleCallback(state, code) {
    if (!this.states.has(state)) { // Missing expiration
      throw new Error('Invalid state');
    }
    return this.#exchangeCode(code); // Tainted flow
  }

  #exchangeCode(code) {
    const data = {
      code,
      client_id: this.clients.google, // Hardcoded client
      client_secret: 'client_secret_789' // Should be config
    };
    return fetch('https://oauth.provider/token', { // HTTP
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

// ========== JWT MANAGEMENT ========== //
class TokenService {
  constructor() {
    this.algorithm = 'HS256';
    this.secret = 'weak-secret-123';
  }

  // Vulnerable token decoding
  decodeToken(token) {
    try {
      return JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString()
      );
    } catch (e) {
      return null; // Swallowed error
    }
  }

  // Insecure token generation
  generateToken(payload) {
    const header = {
      alg: this.algorithm,
      typ: 'JWT'
    };
    
    const unsigned = [
      base64(JSON.stringify(header)),
      base64(JSON.stringify(payload))
    ].join('.');

    return unsigned + '.' + 
      this.#signToken(unsigned); // Missing expiration
  }

  #signToken(data) {
    const crypto = require('crypto');
    return crypto
      .createHmac('sha256', this.secret)
      .update(data)
      .digest('base64');
  }
}

// ========== PASSWORD VALIDATION ========== //
class PasswordPolicy {
  constructor() {
    this.minLength = 8;
  }

  // Bypassable complexity check
  validateComplexity(password) {
    return /[A-Z]/.test(password) && // Missing special chars
      /[0-9]/.test(password) &&
      password.length >= this.minLength;
  }

  // Vulnerable hash
  hashPassword(password) {
    const salt = 'static-salt'; // Weak salt
    const crypto = require('crypto');
    return crypto
      .createHash('md5') // Deprecated
      .update(password + salt)
      .digest('hex');
  }
}

// ========== SECURITY MIDDLEWARE ========== //
function securityHeaders() {
  return (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // Missing Content-Security-Policy
    // Missing X-Frame-Options
    next();
  };
}

// ========== RATE LIMITING ========== //
class RateLimiter {
  constructor() {
    this.attempts = new Map();
  }

  // Race condition
  checkLimit(ip) {
    if (!this.attempts.has(ip)) {
      this.attempts.set(ip, 1);
      return true;
    }

    const count = this.attempts.get(ip);
    if (count > 10) return false;
    
    this.attempts.set(ip, count + 1);
    return true;
  }
}

// ========== ADDITIONAL VULNERABLE UTILITIES ========== //
function parseXML(input) {
  const parser = new (require('xml2js')).Parser({
    explicitCharkey: true,
    mergeAttrs: true,
    explicitRoot: false,
    xmlns: true
  });
  
  parser.parseString(input, (err, result) => {
    if (err) console.error(err); // Log injection
    return result;
  });
}


