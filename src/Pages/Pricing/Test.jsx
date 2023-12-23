import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { baseurl } from "../../utils/BaseUrl";
import Cookies from "js-cookie";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import SubHead from "../../components/Header/SubHead";
const Test = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const userCookie = Cookies.get("user");

  const redirectToCheckout = async (price) => {
    try {
      const response = await axios.post(`${baseurl}/api/payment`, { price });
      console.log(response);
      console.log(response.url);
      window.location.href = response.data.url; // Use the URL directly from the session object
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <Desktop>
      {userCookie ? <SubHead /> : ""}
      <div className="flex flex-col justify-center items-center pb-10 mt-4 ">
        
          <label className="sr-only" id="headlessui-label-:r2:" role="none">
            Payment frequency
          </label>
         <br />  <br />  <br />
            <h2 className="text-dark price">How It Work</h2>
    
        
        <div className="space-y-4 mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          <div style={{height:" max-content",  }} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6" >
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Hobby
              </h2>
              <p className="mt-2 text-sm text-gray-500">Try us at no cost</p>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $0
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-1">
                <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                  2 articles
                </span>
                <span className="text-sm font-default tracking-tight text-gray-500">
                  ($0.00 / article)
                </span>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(0);
                  }}
                  className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  0
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "#fff", color: "#000"}} className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    2 articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
              </ul>
            </div>
          </div>
        
          <div  style={{height:" max-content", }} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Professional
              </h2>
              <p className="mt-2 text-sm text-gray-500">Now you're a pro</p>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $20
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-1">
                <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                  50 articles
                </span>
                <span className="text-sm font-default tracking-tight text-gray-500">
                  ($0.98 / article)
                </span>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(20);
                  }}
                  className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  20
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "rgba(56, 67, 208, 1)"}} className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    50 articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">API Access</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Customer Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div  style={{height:" max-content"}} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Custom
              </h2>
              <p className="mt-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $50
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
                <p className="mt-1">
                  <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                    200 articles
                  </span>
                  <span className="text-sm font-default tracking-tight text-gray-500">
                    (0.500/article)
                  </span>
                </p>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(50);
                  }}
                  style={{background: "#fff", color: "#000"}}  className=" group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  50
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "#fff", color: "#000"}}  className=" group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Custom # of articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">API Access</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Premium Customer Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Desktop>
      <Mobile>
      {userCookie ? <SubHead /> : ""}
      <div className="flex flex-col justify-center items-center pb-10 mt-4 ">
        
          <label className="sr-only" id="headlessui-label-:r2:" role="none">
            Payment frequency
          </label>
         <br />  <br />  <br />
            <h4 className="text-dark fs-4 fw-bold">Choose the Perfect Plan For You</h4>
    
        
        <div className="space-y-4 mt-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          <div style={{height:" max-content",  }} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6" >
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Hobby
              </h2>
              <p className="mt-2 text-sm text-gray-500">Try us at no cost</p>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $0
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-1">
                <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                  2 articles
                </span>
                <span className="text-sm font-default tracking-tight text-gray-500">
                  ($0.00 / article)
                </span>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(0);
                  }}
                  className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  0
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "#fff", color: "#000"}} className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    2 articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <br/>
          <div  style={{height:" max-content", }} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Professional
              </h2>
              <p className="mt-2 text-sm text-gray-500">Now you're a pro</p>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $20
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <p className="mt-1">
                <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                  50 articles
                </span>
                <span className="text-sm font-default tracking-tight text-gray-500">
                  ($0.98 / article)
                </span>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(20);
                  }}
                  className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  20
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "rgba(56, 67, 208, 1)"}} className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    50 articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">API Access</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Customer Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <br/>
          <div  style={{height:" max-content"}} className="mx-3 bg-white divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Custom
              </h2>
              <p className="mt-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  $50
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
                <p className="mt-1">
                  <span className="text-sm font-default tracking-tight text-gray-700 mr-2">
                    200 articles
                  </span>
                  <span className="text-sm font-default tracking-tight text-gray-500">
                    (0.500/article)
                  </span>
                </p>
              </p>
              {userCookie ? (
                <button
                  onClick={() => {
                    redirectToCheckout(50);
                  }}
                  style={{background: "#fff", color: "#000"}}  className=" group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4"
                >
                  50
                </button>
              ) : (
                <Link to="/login">
                  <button style={{background: "#fff", color: "#000"}}  className=" group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4">
                    sign up
                  </button>
                </Link>
              )}
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">
                What's included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Custom # of articles a month
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">API Access</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Over 100 supported languages
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-green-500"
                    x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    Premium Customer Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Mobile>
    </div>
  );
};

export default Test;
