# Yolo Group ExBanking assessment

A test automation framework for the ExBanking API. The specification of the project can be read [here](docs/ExBanking_for_test_assignment.pdf) in the Assignment document.

## Tools

- **Mock Service Worker** for the service (Learn more at <https://mswjs.io/>)
- **Mochajs** a feature-rich JS test framework (Learn more at <https://mochajs.org/>)
- **Chaijs** for making assertions using a BDD/TDD style. Learn more at <https://www.chaijs.com/>)
- **Artillery** for Load testing (Find out more at <https://www.artillery.io/>)

## Setup

This project have been tested on Node v16.15.0 and above. While earlier versions of node may be compatible, but they have not been verified.

If your PC does not have Node.js, please install <https://nodejs.org/en/> take the LTS version based on your Operating system. Or even better, you can use [NVM](https://github.com/nvm-sh/nvm) a fantastic tool for managing your **Node** installation.

Clone the project repository by opening a terminal and executing:

```bash
git clone https://github.com/martincxx/Yolo-ExBanking.git
```

Now open VSCode and navigate to the project (Yolo-ExBanking) folder.
From your terminal (or your VSCode) install the project's dependencies.

```bash
npm i
```

## Run tests

This project provides the following commands

### Run functional tests

```bash
npm run test
```

### Generate a Report for the functional suite

```bash
npm run test:report
```

The generated report is available in the *mochawesome-report* folder.

### Run Non-functional test(s)

```bash
npm run artillery:test
```

The generated report is available in the *performanceTests* folder.
