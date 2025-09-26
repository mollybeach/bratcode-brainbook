# AWS Study Guide

### 📄 Introduction to AWS
- **What is AWS?**
  - Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon, offering a wide range of services including computing power, storage options, and networking capabilities.

### 📦 Setting Up
- **Creating an AWS Account**:
  - Go to the [AWS Management Console](https://aws.amazon.com/console/) and sign up for an account.

### 📋 Key Services
- **EC2 (Elastic Compute Cloud)**:
  - Provides scalable virtual servers in the cloud.
  
  - **Launching an EC2 Instance**:
    1. Go to the EC2 Dashboard.
    2. Click on "Launch Instance".
    3. Choose an Amazon Machine Image (AMI).
    4. Select an instance type and configure settings.
    5. Review and launch the instance.

- **S3 (Simple Storage Service)**:
  - Object storage service for storing and retrieving any amount of data.

  - **Creating an S3 Bucket**:
```bash
aws s3 mb s3://my-bucket-name
```

  - **Uploading a File to S3**:
```bash
aws s3 cp myfile.txt s3://my-bucket-name/
```

- **RDS (Relational Database Service)**:
  - Managed relational database service for databases like MySQL, PostgreSQL, and SQL Server.

  - **Creating an RDS Instance**:
    1. Go to the RDS Dashboard.
    2. Click on "Create database".
    3. Choose a database engine and configure settings.
    4. Launch the database instance.

- **Lambda**:
  - Serverless compute service that runs code in response to events.

  - **Creating a Lambda Function**:
```javascript
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
};
```

- **CloudFormation**:
  - Infrastructure as Code (IaC) service for defining and provisioning AWS infrastructure.

  - **Creating a CloudFormation Stack**:
```yaml
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-bucket-name
```

### 🔄 IAM (Identity and Access Management)
- **Setting Up IAM Users and Roles**:
  - Create users and assign permissions to manage access to AWS services.

  - **Creating a New IAM User**:
    1. Go to the IAM Dashboard.
    2. Click on "Users" and then "Add user".
    3. Set permissions and tags.

### 📦 CloudWatch
- **Monitoring AWS Resources**:
  - Use CloudWatch to monitor and log AWS resources.

  - **Creating a CloudWatch Alarm**:
    1. Go to the CloudWatch Dashboard.
    2. Click on "Alarms" and then "Create Alarm".
    3. Select a metric and configure the alarm settings.

### 📜 AWS CLI
- **Installing AWS CLI**:
  - Follow the instructions on the [AWS CLI installation page](https://aws.amazon.com/cli/).

- **Configuring AWS CLI**:
```bash
aws configure
```

- **Using AWS CLI Commands**:
```bash
aws ec2 describe-instances
aws s3 ls
```
