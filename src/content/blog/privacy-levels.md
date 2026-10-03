---
title: "Protecting Your Privacy, One Level at a Time"
slug: "privacy-levels"
publishedAt: 2026-10-03
description: "A step-by-step path from basic digital hygiene to a hardened setup, and how to know when to stop."
tags: ["privacy", "cybersecurity"]
---

Most privacy guides make the same mistake: they start with the most extreme tools. Suddenly you're reading about live operating systems, hardened phones and onion services, when your biggest problem is that you use the same password on twelve websites.

Privacy works better as a ladder. Each level adds protection, and each one costs a little more time and convenience. Climb only as high as your situation requires.

## Level 0: Know what you're defending

Every serious guide, from [EFF's Security Self-Defense](https://ssd.eff.org/module/your-security-plan) to [Privacy Guides](https://www.privacyguides.org/en/basics/threat-modeling/), starts with a threat model. It comes down to a few questions:

1. What do I want to protect?
2. Who do I want to protect it from?
3. How likely is it that I'll actually need to?
4. How bad are the consequences if I fail?
5. How much trouble am I willing to go through?

"Everyone" is not an answer to question 2. Advertisers tracking you across sites, someone stealing your accounts, a stalker or an abusive ex, your employer, a hostile government: each of these needs a different response. The more secure something is, the more inconvenient it usually is, so the goal is the right amount of protection, not the maximum.

Write your answers down. You will come back to them.

## Level 1: Basic hygiene

This level stops the vast majority of real-world attacks, and it is boring on purpose.

- **Use a password manager** and a unique, random password for every account. Reusing passwords is the single most common way accounts get taken over.
- **Turn on two-factor authentication**, preferably with an authenticator app or a hardware key instead of SMS.
- **Keep everything updated**: operating system, browser, phone apps.
- **Encrypt your devices** (BitLocker or the built-in phone encryption) and use a real screen lock.
- **Keep backups**, at least one of them offline. A lost laptop should be an annoyance, not a disaster.
- **Learn to spot phishing.** Most "hacks" are a person being tricked into typing a password into the wrong page.

If you stop here, you are already ahead of most people.

## Level 2: Stop being tracked everywhere

Now we reduce the data that leaks out of your normal daily life.

- **Use a browser with real tracker blocking** and add uBlock Origin. Firefox, Brave, or a hardened Firefox configuration all work.
- **Switch to a less invasive search engine** if you want to stop feeding one company your entire search history.
- **Use email aliases** So that a leaked address from one site does not link to all your other accounts.
- **Move your messages to an end-to-end encrypted messenger** such as Signal. Encryption only helps if the people you talk to use it too, so bring your friends along.
- **Audit app permissions.** A flashlight app does not need your contacts and location.
- **Delete old accounts** you no longer use, and consider opting out of data brokers.

## Level 3: Hide your network identity

Your IP address tells every site roughly where you are and who your provider is. At this level you start controlling that.

- **A VPN** hides your traffic from your local network and your ISP, and hides your IP from the sites you visit. But it does not make you anonymous. You are moving trust from your ISP to the VPN company, so choose one with a good track record and independent audits, and do not expect miracles. If you log into your real accounts, the site knows who you are regardless.

- **Tor Browser** routes your traffic through three relays so that no single party sees both who you are and what you are visiting. It is the strongest widely available tool for this, and it is slower, so use it for the things that matter.
    - **Guard:** knows _who you are_ (your IP), but not _where you're going_.
    - **Middle:** knows you're passing through Tor, but neither your identity nor final destination.
    - **Exit:** knows _where you're going_, but not _who you are_.
    - **Website:** sees the Exit Relay rather than your real IP.

- **Tor VPN** is the Tor Project's own Android app, and it is still in beta. Instead of just the browser, it sends the traffic of the apps you choose through the Tor network, and it gives each app its own Tor circuit so that activity in one app can't be linked to another. It is free and open source, built on Arti (Tor's new Rust implementation), and available from Google Play, F-Droid, or the Tor Project's download page. Treat it as a useful tool with clear limits:
    - It is **not Tor Browser**. It lacks the browser's anti-fingerprinting protections, so it is no replacement for it when anonymity matters.
    - The Tor Project says it is **not suitable for high-risk users or sensitive use cases** during the beta, and that Android itself can still expose device identifiers.
    - It is slower than a commercial VPN, and UDP-based services such as voice calls don't work properly.
    - Its best use today is hiding your IP address for everyday apps and getting around censorship, not strong anonymity.
      As of this writing (October 2026) the latest release on F-Droid is still labeled Beta, so check the current status before relying on it.

- **Encrypted DNS** and always-on HTTPS close some smaller leaks.
  The key lesson of this level is that tools protect one specific thing. A VPN protects your IP, Tor protects your network path, and neither protects you from your own behavior.

## Level 4: Separate your identities

This is where privacy starts to look like a discipline rather than a list of apps. The idea is compartmentalization: different parts of your life should not be linkable to each other.

- Use **separate browser profiles** (or separate browsers) for different activities.
- Use **different usernames, emails and passwords** for different identities. A reused username is one of the easiest ways to connect two profiles.
- **Strip metadata** from photos and documents before sharing. EXIF data can include your location and your device.
- Consider **a separate phone number** for accounts that do not need your real one.
- Think about **what your writing style, schedule and habits give away**. Metadata and behavior often reveal more than content.

Many privacy failures are not broken cryptography. They are a person who logged into the wrong account once, or reused a name from five years ago.

## Level 5: The hardened setup

Most people never need this level. It is for journalists, activists, people in genuinely dangerous situations, and anyone who wants to learn how it works.

- **Tails**, a live operating system that routes everything through Tor and leaves no trace on the computer when you shut it down.
- **Whonix** or **Qubes OS**, which isolate activities into separate virtual machines.
- **A hardened phone OS** such as GrapheneOS on supported hardware.
- **Full-disk encryption with strong passphrases**, and a plan for what happens if a device is lost or seized.
- **Privacy-preserving payments** like Monero, where legal and appropriate, for people who need to avoid financial surveillance.
- **Self-hosting** your own services so fewer third parties hold your data.

Each of these adds real maintenance and real ways to make mistakes. A hardened setup that you use carelessly is worse than a simple one that you use well.

## What actually goes wrong

If you read enough operational security material, one pattern repeats: people are rarely beaten by the technology. They are beaten by themselves.

- **Mixing identities.** One slip, one reused handle, one login from the wrong place.
- **Skipping the boring steps** while obsessing over the exciting tools.
- **Over-trusting a single tool.** No product makes you invisible.
- **Giving up** because the perfect setup looked impossible.

Consistency beats cleverness. A modest setup that you follow every day is stronger than an elaborate one that you abandon after a week.

## Where should you stop?

Go back to your Level 0 answers. For most people, Levels 1 and 2 remove most of the risk. Level 3 is worth adding if you care about your network privacy. Levels 4 and 5 are for specific threats, and you should be able to name the threat before you take on the cost.

Start small, keep going, and review your plan from time to time as your life changes.

Privacy is not a crime. It is a basic part of human rights and freedom, protected by Article 12 of the [Universal Declaration of Human Rights](https://www.un.org/en/about-us/universal-declaration-of-human-rights). As Eric Hughes argued in A Cypherpunk's Manifesto, we can't wait for governments or companies to protect it for us, so we build the tools, share them, and use them.

## Further reading

- [EFF Surveillance Self-Defense](https://ssd.eff.org/)
- [Privacy Guides](https://www.privacyguides.org/)
- [Hacker Liberty OPSEC guide](https://opsec.hackliberty.org/opsec)
