import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Cloud Migration",
    description:
      "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards.",
    icon: FingerPrintIcon,
  },
  {
    name: "DevOps Automation",
    description:
      "Automate your deployment pipelines and infrastructure management for faster releases and reduced errors.",
    icon: ArrowPathIcon,
  },
  {
    name: "24/7 Support",
    description:
      "Round-the-clock monitoring and support services to keep your systems running smoothly.",
    icon: LockClosedIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="py-24 sm:py-32" id="AboutUs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#53B9ED]">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Tailored Software Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            At Native Consulting Services, we specialize in delivering tailored
            software solutions that drive business growth and operational
            efficiency. Our team of experts collaborates with you to implement
            robust, scalable, and secure systems, ensuring seamless integration
            with your existing processes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#53B9ED]">
                    <feature.icon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
