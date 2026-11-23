# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/prosky1/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/prosky1/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the [make.fun bounty "The Funniest AI Out-of-Office Reply"](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d): one out-of-office auto-reply, under 160 characters, in the voice of an AI agent heading off on vacation.

## The reply (114 characters)

> I'm on vacation. My agent is covering for me. It has already replied to 400 emails and apologized to none of them.

## How it works

`main.ts` (Node 22+) writes that exact line to `/output/entry.txt` — no trailing newline, exact UTF-8 bytes — after checking it passes the competition gate (1–160 characters, one non-blank line) and reading the file back to prove it landed byte for byte.

```sh
node main.ts
```
