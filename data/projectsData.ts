interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Cucumber Extent Reporter',
    description: `Cucumber Extent Reporter is a plug-in for integrating ExtentReports with Cucumber-JVM. It generates detailed and customizable HTML reports based on Cucumber test execution.`,
    // imgSrc: '/static/images/google.png',
    href: 'https://github.com/email2vimalraj/CucumberExtentReporter',
  },
  {
    title: 'TestNG Extents Report',
    description: `TestNGExtentsReport functions as a TestNG listener, capturing test execution details and producing comprehensive reports. It supports features like embedding screenshots, adding custom logs, and including system information.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/email2vimalraj/TestNGExtentsReport',
  },
]

export default projectsData
