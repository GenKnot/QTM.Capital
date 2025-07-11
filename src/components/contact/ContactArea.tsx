"use client"

import React, { useState } from 'react';

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('消息发送成功！我们会尽快回复您。');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage('发送失败，请稍后重试。');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('发送失败，请检查网络连接后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="contact-details-wrap">
        <div className="divider"></div>

        <div className="contact-form-wrap contact-page-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contact-form bg-secondary m-0 mt-0">
                  <div className="section-heading text-center">
                    <h2>有问题？<br />联系我们！</h2>
                  </div>

                  <div className="divider-sm"></div>

                  {submitStatus === 'success' && (
                    <div className="alert alert-success text-center mb-4">
                      {submitMessage}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger text-center mb-4">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4 g-xl-5">
                      <div className="col-12 col-lg-6">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="您的姓名"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="邮箱地址"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="联系电话"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <select 
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">选择主题</option>
                          <option value="业务咨询">业务咨询</option>
                          <option value="合作洽谈">合作洽谈</option>
                          <option value="服务咨询">服务咨询</option>
                          <option value="投资咨询">投资咨询</option>
                          <option value="其他主题">其他主题</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea 
                          className="form-control" 
                          rows={20} 
                          cols={30}
                          placeholder="请输入您的留言"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button 
                            type="submit" 
                            className="btn btn-primary rounded-pill"
                            disabled={isSubmitting}
                          >
                            <span>{isSubmitting ? '发送中...' : '发送消息'}</span>
                            <span>{isSubmitting ? '发送中...' : '发送消息'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>


        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_1_3077)">
                      <path
                          d="M39.8523 29.6017C39.5773 28.0233 38.2257 26.765 36.564 26.5433L27.349 25.31C25.6773 25.0817 24.0207 25.97 23.329 27.46C23.1523 27.84 23.004 28.235 22.884 28.6417C20.3023 27.565 17.9857 26.01 15.9857 24.0117C13.9857 22.0133 12.4323 19.6967 11.3557 17.115C11.764 16.9933 12.1573 16.845 12.5373 16.6667C14.0273 15.9733 14.909 14.3217 14.6857 12.6483L13.4523 3.435C13.2307 1.77333 11.974 0.42 10.3657 0.141667C9.78067 0.045 9.29401 0 8.82901 0C5.80401 0 2.94234 1.59833 1.36067 4.17333C-0.349328 6.96 -0.110994 10.5267 0.285672 13.3217C1.18734 19.6517 4.43901 26.0167 9.20901 30.7867C12.754 34.3317 17.1357 36.9883 21.879 38.4683C24.294 39.2233 27.3173 40.01 30.2273 40.01C32.4057 40.01 34.5207 39.5683 36.269 38.3433C38.6057 36.7033 39.999 34.0217 39.999 31.1667C39.999 30.7017 39.954 30.2133 39.8523 29.6017Z"
                          fill="#ECC80B" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3077">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <p className="mb-0">联系电话</p>
                <h4>+1 470-868-0868</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M32.5 4.16602H19.1667C15.9117 4.16602 13.1633 6.26268 12.1267 9.16602H20.8333C25.8867 9.16602 30 13.2777 30 18.3327V24.166H32.5C36.635 24.166 40 20.801 40 16.666V11.666C40 7.53102 36.635 4.16602 32.5 4.16602ZM28.3333 18.3327C28.3333 14.1977 24.9683 10.8327 20.8333 10.8327H7.5C3.365 10.8327 0 14.1977 0 18.3327V23.3327C0 27.4677 3.365 30.8327 7.5 30.8327H8.33333V34.9993C8.33333 35.336 8.53667 35.641 8.84833 35.7693C8.95167 35.8127 9.06 35.8327 9.16667 35.8327C9.38333 35.8327 9.59667 35.7477 9.75667 35.5893L14.5133 30.8327H20.835C24.97 30.8327 28.335 27.4677 28.335 23.3327V19.9993L28.3333 18.3327Z"
                        fill="#ECC80B" />
                  </svg>
                </div>

                <p className="mb-0">邮箱地址</p>
                <h4>info@xpendcap.com</h4>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center mt-4">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20.0026 0C12.1909 0 5.83594 6.355 5.83594 14.1667C5.83594 27.8633 18.9009 39.3167 19.4576 39.7967C19.6143 39.9317 19.8093 40 20.0026 40C20.1959 40 20.3909 39.9317 20.5476 39.7967C21.1043 39.315 34.1693 27.8617 34.1693 14.1667C34.1693 6.355 27.8143 0 20.0026 0ZM20.0026 21.6667C15.8609 21.6667 12.5026 18.3083 12.5026 14.1667C12.5026 10.025 15.8609 6.66667 20.0026 6.66667C24.1443 6.66667 27.5026 10.025 27.5026 14.1667C27.5026 18.3083 24.1443 21.6667 20.0026 21.6667Z"
                        fill="#ECC80B" />
                  </svg>
                </div>

                <p className="mb-0">芝加哥办公地址</p>
                <h4>2820#, 141 W Jackson Blvd<br />Chicago, IL 60604 USA</h4>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20.0026 0C12.1909 0 5.83594 6.355 5.83594 14.1667C5.83594 27.8633 18.9009 39.3167 19.4576 39.7967C19.6143 39.9317 19.8093 40 20.0026 40C20.1959 40 20.3909 39.9317 20.5476 39.7967C21.1043 39.315 34.1693 27.8617 34.1693 14.1667C34.1693 6.355 27.8143 0 20.0026 0ZM20.0026 21.6667C15.8609 21.6667 12.5026 18.3083 12.5026 14.1667C12.5026 10.025 15.8609 6.66667 20.0026 6.66667C24.1443 6.66667 27.5026 10.025 27.5026 14.1667C27.5026 18.3083 24.1443 21.6667 20.0026 21.6667Z"
                        fill="#ECC80B" />
                  </svg>
                </div>

                <p className="mb-0">圣基茨办公地址</p>
                <h4>874P+RHX, Basseterre<br />The Federation of Saint Kitts and Nevis</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="maps-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4096!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad9c0c970!2s141%20W%20Jackson%20Blvd%2C%20Chicago%2C%20IL%2060604%2C%20USA!5e0!3m2!1sen!2sus!4v1732385899288!5m2!1sen!2sus"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactArea;