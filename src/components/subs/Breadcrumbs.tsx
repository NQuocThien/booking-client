"use client";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";

export interface IBreadcrumbItem {
  label: string;
  url: string;
}

export interface ICustomBreadcrumbsProps {
  paths: IBreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<ICustomBreadcrumbsProps> = ({ paths }) => {
  return (
    <Breadcrumb>
      {paths.map((path, index) => {
        if (index === paths.length - 1)
          return (
            <Breadcrumb.Item
              key={index}
              active={index === paths.length - 1}
              as={"span"}>
              {path.label}
            </Breadcrumb.Item>
          );
        return (
          <Link key={index} href={path.url} className="me-1">
            {path.label} /
          </Link>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
