# python3 -m venv .venv = create virtual env
# source .venv/bin/activate = activate virtual env
#  pip install boto3 =  install boto3

import boto3

def test():
    sts = boto3.client("sts")
    identity = sts.get_caller_identity()
    print("AWS account", identity["Account"])
    print("User ARN", identity["Arn"])

# def create_bucket_method(bucket_name, region):
def create_bucket_method(bucket_name):
    s3 = boto3.client("s3")
    try:
        s3.create_bucket(
            Bucket=bucket_name,
        #     CreateBucketConfiguration={
        #     'LocationConstraint': 'af-south-1'|'ap-east-1'|'ap-northeast-1'|'ap-northeast-2'|'ap-northeast-3'|'ap-south-1'|'ap-south-2'|'ap-southeast-1'|'ap-southeast-2'|'ap-southeast-3'|'ap-southeast-4'|'ap-southeast-5'|'ca-central-1'|'cn-north-1'|'cn-northwest-1'|'EU'|'eu-central-1'|'eu-central-2'|'eu-north-1'|'eu-south-1'|'eu-south-2'|'eu-west-1'|'eu-west-2'|'eu-west-3'|'il-central-1'|'me-central-1'|'me-south-1'|'sa-east-1'|'us-east-2'|'us-gov-east-1'|'us-gov-west-1'|'us-west-1'|'us-west-2'
        #     # s3.create_bucket(Bucket=bucket_name, CreateBucketConfiguration={"LocationConstraint": region})
        #     # print("Created")
        # }
        )
    except(e):
        print(e)
        print("Couldn't create s3 bucket")

def main():
    test()
    bucket_name = "keyin-magret-sdk-bucket"
    # region = "us-east-1" | "ca-central-1"
    # create_bucket_method(bucket_name, region)
    create_bucket_method(bucket_name)

if __name__=="__main__":
    main()