'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const AboutInfo = () => {
  return (
    <div className="hero py-20" style={{ background: "linear-gradient(to right, #A6D71C, #2E6A47)" }}>
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4">
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
            <div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>How do I update my medication information?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      You can update your medication information by logging into your account and navigating to the "Medication Profile" section.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Is my data secure?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your data.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>How do I contact customer support?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      You can contact our customer support team by emailing support@medsync.com or by calling 1-800-MEDSYNC.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Policies</h2>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Privacy Policy</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <h2 className="text-lg font-bold mb-2">Data Collection:</h2>
                    <ul className="list-disc pl-4 mb-4">
                      <li>We collect user data such as medication information, medical conditions (if provided), and emergency contact details.</li>
                      <li>We may also collect usage data to improve our services.</li>
                    </ul>

                    <h2 className="text-lg font-bold mb-2">Data Usage:</h2>
                    <ul className="list-disc pl-4 mb-4">
                      <li>User data is used solely to manage medication routines, provide medication information, and connect users to emergency services when necessary.</li>
                      <li>We will not share user data with any third-party without explicit consent.</li>
                    </ul>

                    <h2 className="text-lg font-bold mb-2">Data Security:</h2>
                    <ul className="list-disc pl-4 mb-4">
                      <li>We implement industry-standard security measures to protect user data.</li>
                      <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Terms of Service</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <h2 className="text-lg font-bold mb-2">Acceptance of Terms:</h2>
                      <p>By using this website, users agree to be bound by these terms of service.</p>

                      <h2 className="text-lg font-bold mb-2 mt-4">User Conduct:</h2>
                      <ul className="list-disc pl-4 mb-4">
                        <li>Users are prohibited from using the website for any illegal or unauthorized purposes.</li>
                        <li>Users are responsible for the accuracy of the information they provide.</li>
                      </ul>

                      <h2 className="text-lg font-bold mb-2 mt-4">Disclaimer:</h2>
                      <ul className="list-disc pl-4 mb-4">
                        <li>The website content is for informational purposes only and should not be construed as medical advice.</li>
                        <li>Users should consult with a healthcare professional for any medical concerns.</li>
                      </ul>

                      <h2 className="text-lg font-bold mb-2 mt-4">Limitation of Liability:</h2>
                      <p>We are not liable for any damages arising from the use of this website.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>Content Policy</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      <h2 className="text-lg font-bold mb-2">Prohibited Content:</h2>
                      <ul className="list-disc pl-4 mb-4">
                        <li>Users are prohibited from posting any content that is illegal, harmful, or offensive.</li>
                        <li>This includes content that promotes violence, hate speech, or discrimination.</li>
                      </ul>

                      <h2 className="text-lg font-bold mb-2 mt-4">Moderation:</h2>
                      <p>We reserve the right to remove any content that violates our policies.</p>

                      <h2 className="text-lg font-bold mb-2 mt-4">Reporting:</h2>
                      <p>Users can report any inappropriate content to our support team.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
