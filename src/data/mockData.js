// -- MOCK DATA --
export const MOCK_USERS = {
	admin: { password: "password", role: "admin" },
	user: { password: "password", role: "normal" },
};

export const BUCKET_DATA = {
	gcp: [
		{ id: "gcp-bucket-16", name: "gcs-deng-dping-data-platform-hive-prd", potentialSavings: 1850 },
		{ id: "gcp-bucket-1", name: "gcs-deng-dping-zeppelin-prd", potentialSavings: 450 },
		{
			id: "gcp-bucket-2",
			name: "gcs-deng-dping-data-platform-hive-scrap-prd",
			potentialSavings: 1200,
		},
		{
			id: "gcp-bucket-3",
			name: "gcs-deng-dping-data-platform-hive-platinum-prd",
			potentialSavings: 780,
		},
		{
			id: "gcp-bucket-4",
			name: "gcs-deng-dping-data-platform-hive-mercury-prd",
			potentialSavings: 250,
		},
		{ id: "gcp-bucket-5", name: "gcs-deng-cdpnew-scyllabackup-prd", potentialSavings: 1800 },
		{ id: "gcp-bucket-6", name: "gcs-deng-cdp-scyllabackup-prd", potentialSavings: 2100 },
		{ id: "gcp-bucket-7", name: "gcs-deng-ab-new-scyllabackup-prd", potentialSavings: 650 },
		{ id: "gcp-bucket-8", name: "gcs-dataengg-vm-logs-prd", potentialSavings: 300 },
		{ id: "gcp-bucket-9", name: "gcs-deng-cdnew1-scyllabackup-prd", potentialSavings: 1500 },
		{
			id: "gcp-bucket-10",
			name: "gcs-deng-dping-data-platform-hive-titanium-prd",
			potentialSavings: 2800,
		},
		{ id: "gcp-bucket-11", name: "meesho-internal-audit-offer-data", potentialSavings: 900 },
		{ id: "gcp-bucket-12", name: "gcs-deng-ab-new3-scyllabackup-prd", potentialSavings: 1200 },
		{
			id: "gcp-bucket-13",
			name: "gcs-deng-dping-data-platform-realtime-prd",
			potentialSavings: 3200,
		},
		{
			id: "gcp-bucket-14",
			name: "gcs-deng-dping-zeppelin-notebooks-archival",
			potentialSavings: 550,
		},
		{ id: "gcp-bucket-15", name: "gcs-deng-dpexp-ab-service-prd", potentialSavings: 750 },
		{
			id: "gcp-bucket-17",
			name: "gcs-deng-dping-data-platform-hive-gold-prd",
			potentialSavings: 2400,
		},
		{ id: "gcp-bucket-18", name: "gcs-deng-ab-newv3-scyllabackup-prd", potentialSavings: 1600 },
		{ id: "gcp-bucket-19", name: "gcs-dsci-vs2-scyllabackup-prd", potentialSavings: 1450 },
		{ id: "gcp-bucket-20", name: "gcs-dscispark-ds-spark-operator-prd", potentialSavings: 2800 },
		{ id: "gcp-bucket-21", name: "gcs-elasticsearch-snapshots-p", potentialSavings: 2200 },
		{ id: "gcp-bucket-22", name: "gcs-dmnd-ns-new-scyllabackup-prd", potentialSavings: 1800 },
		{ id: "gcp-bucket-23", name: "gcs-dmnd-rst-scyllabackup-prd", potentialSavings: 1200 },
		{ id: "gcp-bucket-24", name: "gcs-dmnd-srch-cg-scyllabackup-prd", potentialSavings: 4500 },
	],
	aws: [
		{ id: "aws-bucket-1", name: "aws-main-app-backups", potentialSavings: 950 },
		{ id: "aws-bucket-2", name: "aws-user-uploads-critical", potentialSavings: 1500 },
		{ id: "aws-bucket-3", name: "aws-analytics-pipeline-temp", potentialSavings: 600 },
		{ id: "aws-bucket-4", name: "aws-financial-records-q2", potentialSavings: 2500 },
		{ id: "aws-bucket-5", name: "aws-iot-stream-data-raw", potentialSavings: 1150 },
		{ id: "aws-bucket-6", name: "aws-dev-lambda-functions", potentialSavings: 300 },
		{ id: "aws-bucket-7", name: "aws-public-website-assets", potentialSavings: 450 },
	],
	azure: [
		{ id: "azure-bucket-1", name: "azure-blob-media-storage", potentialSavings: 1100 },
		{ id: "azure-bucket-2", name: "azure-vm-disks-eastus", potentialSavings: 1350 },
		{ id: "azure-bucket-3", name: "azure-sql-db-backups", potentialSavings: 1900 },
		{ id: "azure-bucket-4", name: "azure-cdn-origin-content", potentialSavings: 850 },
		{ id: "azure-bucket-5", name: "azure-data-lake-gen2", potentialSavings: 2200 },
	],
};

export const FOLDER_DATA = {
	"gcp-bucket-1": [
		{ id: "gcp-f1-1", name: "/zeppelin/logs/old-archive-2022/", savings: 200 },
		{ id: "gcp-f1-2", name: "/zeppelin/notebooks/stale/", savings: 250 },
	],
	"gcp-bucket-2": [
		{ id: "gcp-f2-1", name: "/hive/raw-data/legacy-partitions/", savings: 800 },
		{ id: "gcp-f2-2", name: "/hive/temp/processing-cache/", savings: 400 },
	],
	"gcp-bucket-3": [{ id: "gcp-f3-1", name: "/hive/platinum/archived-tables/", savings: 780 }],
	"gcp-bucket-4": [{ id: "gcp-f4-1", name: "/hive/mercury/old-snapshots/", savings: 250 }],
	"gcp-bucket-5": [
		{ id: "gcp-f5-1", name: "/scylla/backups/2022-q1/", savings: 900 },
		{ id: "gcp-f5-2", name: "/scylla/dumps/archived/", savings: 900 },
	],
	"gcp-bucket-6": [
		{ id: "gcp-f6-1", name: "/scylla/legacy-backups/", savings: 1500 },
		{ id: "gcp-f6-2", name: "/scylla/temp-restore/", savings: 600 },
	],
	"gcp-bucket-7": [{ id: "gcp-f7-1", name: "/scylla/test-data/", savings: 150 }],
	"gcp-bucket-8": [{ id: "gcp-f8-1", name: "/vm-logs/archived-2022/", savings: 300 }],
	"gcp-bucket-9": [
		{ id: "gcp-f9-1", name: "/scylla/backup-archives/", savings: 750 },
		{ id: "gcp-f9-2", name: "/scylla/temp-staging/", savings: 750 },
	],
	"gcp-bucket-10": [
		{ id: "gcp-f10-1", name: "/hive/titanium/old-partitions/", savings: 1400 },
		{ id: "gcp-f10-2", name: "/hive/titanium/temp-data/", savings: 1400 },
	],
	"gcp-bucket-11": [{ id: "gcp-f11-1", name: "/audit/offer-data/archived/", savings: 900 }],
	"gcp-bucket-12": [{ id: "gcp-f12-1", name: "/ab-test/backup-v3/old/", savings: 1200 }],
	"gcp-bucket-13": [
		{ id: "gcp-f13-1", name: "/realtime/streaming/old-checkpoints/", savings: 1600 },
		{ id: "gcp-f13-2", name: "/realtime/kafka/archived-offsets/", savings: 1600 },
	],
	"gcp-bucket-14": [{ id: "gcp-f14-1", name: "/notebooks/archived-experiments/", savings: 550 }],
	"gcp-bucket-15": [{ id: "gcp-f15-1", name: "/ab-service/experiment-data/old/", savings: 750 }],
	"gcp-bucket-16": [
		{ id: "gcp-f16-1", name: "/hive/production/archived-tables/", savings: 925 },
		{ id: "gcp-f16-2", name: "/hive/production/temp-staging/", savings: 925 },
	],
	"gcp-bucket-17": [
		{ id: "gcp-f17-1", name: "/hive/gold/legacy-aggregations/", savings: 1200 },
		{ id: "gcp-f17-2", name: "/hive/gold/unused-views/", savings: 1200 },
	],
	"gcp-bucket-18": [
		{ id: "gcp-f18-1", name: "/ab-test/backup-v3/archived/", savings: 800 },
		{ id: "gcp-f18-2", name: "/ab-test/temp-data/", savings: 800 },
	],
	"gcp-bucket-19": [
		{ id: "gcp-f19-1", name: "/dsci/scylla/vs2-backups/", savings: 725 },
		{ id: "gcp-f19-2", name: "/dsci/scylla/old-snapshots/", savings: 725 },
	],
	"gcp-bucket-20": [
		{ id: "gcp-f20-1", name: "/spark/operator/job-history/", savings: 1400 },
		{ id: "gcp-f20-2", name: "/spark/operator/temp-output/", savings: 1400 },
	],
	"gcp-bucket-21": [
		{ id: "gcp-f21-1", name: "/elasticsearch/snapshots/archived/", savings: 1100 },
		{ id: "gcp-f21-2", name: "/elasticsearch/temp-indices/", savings: 1100 },
	],
	"gcp-bucket-22": [
		{ id: "gcp-f22-1", name: "/dmnd/ns-new/scylla-backups/", savings: 900 },
		{ id: "gcp-f22-2", name: "/dmnd/ns-new/old-snapshots/", savings: 900 },
	],
	"gcp-bucket-23": [
		{ id: "gcp-f23-1", name: "/dmnd/rst/scylla-archives/", savings: 600 },
		{ id: "gcp-f23-2", name: "/dmnd/rst/temp-restore/", savings: 600 },
	],
	"gcp-bucket-24": [
		{ id: "gcp-f24-1", name: "/dmnd/search/cg-backups/", savings: 2250 },
		{ id: "gcp-f24-2", name: "/dmnd/search/archived-indices/", savings: 2250 },
	],
	"aws-bucket-1": [
		{ id: "aws-f1-1", name: "/daily/2023-01-01-to-2023-03-31/", savings: 500 },
		{ id: "aws-f1-2", name: "/weekly/2022-q4/", savings: 450 },
	],
	"aws-bucket-2": [{ id: "aws-f2-1", name: "/profile-pictures/uncompressed-temp/", savings: 1500 }],
	"aws-bucket-3": [
		{ id: "aws-f3-1", name: "/spark-jobs/temp-output/", savings: 300 },
		{ id: "aws-f3-2", name: "/kafka-connect/dead-letter-queue/", savings: 300 },
	],
	"aws-bucket-4": [
		{ id: "aws-f4-1", name: "/receipts/fy2022/", savings: 1200 },
		{ id: "aws-f4-2", name: "/audits/internal-2021/", savings: 1300 },
	],
	"aws-bucket-5": [{ id: "aws-f5-1", name: "/sensor-data/region-a/raw/", savings: 1150 }],
	"aws-bucket-6": [{ id: "aws-f6-1", name: "/deployment-packages/old-versions/", savings: 300 }],
	"aws-bucket-7": [
		{ id: "aws-f7-1", name: "/assets/v1/", savings: 250 },
		{ id: "aws-f7-2", name: "/assets/v2-deprecated/", savings: 200 },
	],
	"azure-bucket-1": [
		{ id: "azure-f1-1", name: "/videos/transcoding-output-temp/", savings: 600 },
		{ id: "azure-f1-2", name: "/images/thumbnails-cache-stale/", savings: 500 },
	],
	"azure-bucket-2": [{ id: "azure-f2-1", name: "/vhds/decommissioned-vms/", savings: 1350 }],
	"azure-bucket-3": [
		{ id: "azure-f3-1", name: "/full-backups/2022-archive/", savings: 1000 },
		{ id: "azure-f3-2", name: "/transaction-logs/2023-q1/", savings: 900 },
	],
	"azure-bucket-4": [{ id: "azure-f4-1", name: "/static/js/vendor-libs-old/", savings: 850 }],
	"azure-bucket-5": [
		{ id: "azure-f5-1", name: "/raw-data/telemetry-2021/", savings: 1200 },
		{ id: "azure-f5-2", name: "/processed-data/obsolete-models/", savings: 1000 },
	],
};

export const SPACE_CONSUMING_DIRS_DATA = {
	"gcp-bucket-16": [
		{
			id: "gcp-scd-1",
			name: "delta_lake/SILVER/ml_platform/model_proxy_logs",
			size: "932 TB",
			potentialSavings: 500 * 20,
		},
	],
	"aws-bucket-4": [
		{
			id: "aws-scd-1",
			name: "/transaction-logs/uncompressed/",
			size: "8.2 TB",
			potentialSavings: 900,
		},
	],
	"aws-bucket-5": [
		{ id: "aws-scd-2", name: "/device-telemetry/json-gz/", size: "6.7 TB", potentialSavings: 720 },
	],
	"azure-bucket-5": [
		{
			id: "azure-scd-1",
			name: "/etl-staging/unpartitioned/",
			size: "10.3 TB",
			potentialSavings: 1100,
		},
	],
};

export const EXPONENTIAL_GROWTH_DATA = {
	"aws-bucket-2": [
		{
			id: "aws-eg-1",
			name: "/user-uploads/video-previews/",
			growth: [
				{ week: "Week 1", size: 10 },
				{ week: "Week 2", size: 20 },
				{ week: "Week 3", size: 40 },
				{ week: "Week 4", size: 80 },
				{ week: "Week 5", size: 160 },
				{ week: "Week 6", size: 320 },
				{ week: "Week 7", size: 640 },
				{ week: "Week 8", size: 1280 },
			],
		},
	],
	"aws-bucket-5": [
		{
			id: "aws-eg-2",
			name: "/iot-stream/raw-json/",
			growth: [
				{ week: "Week 1", size: 22 },
				{ week: "Week 2", size: 35 },
				{ week: "Week 3", size: 60 },
				{ week: "Week 4", size: 100 },
				{ week: "Week 5", size: 170 },
				{ week: "Week 6", size: 290 },
				{ week: "Week 7", size: 500 },
				{ week: "Week 8", size: 850 },
			],
		},
	],
	"gcp-bucket-1": [
		{
			id: "gcp-eg-2",
			name: "/zeppelin/logs/growing/",
			growth: [
				{ week: "Week 1", size: 8 },
				{ week: "Week 2", size: 12 },
				{ week: "Week 3", size: 25 },
				{ week: "Week 4", size: 50 },
				{ week: "Week 5", size: 100 },
				{ week: "Week 6", size: 200 },
				{ week: "Week 7", size: 400 },
				{ week: "Week 8", size: 800 },
			],
		},
	],
	"gcp-bucket-13": [
		{
			id: "gcp-eg-1",
			name: "/realtime/streaming/checkpoints/",
			growth: [
				{ week: "Week 1", size: 5 },
				{ week: "Week 2", size: 15 },
				{ week: "Week 3", size: 35 },
				{ week: "Week 4", size: 75 },
				{ week: "Week 5", size: 150 },
				{ week: "Week 6", size: 300 },
				{ week: "Week 7", size: 600 },
				{ week: "Week 8", size: 1200 },
			],
		},
	],
	"gcp-bucket-21": [
		{
			id: "gcp-eg-3",
			name: "/elasticsearch/snapshots/daily/",
			growth: [
				{ week: "Week 1", size: 15 },
				{ week: "Week 2", size: 28 },
				{ week: "Week 3", size: 55 },
				{ week: "Week 4", size: 100 },
				{ week: "Week 5", size: 190 },
				{ week: "Week 6", size: 360 },
				{ week: "Week 7", size: 680 },
				{ week: "Week 8", size: 1300 },
			],
		},
	],
	"gcp-bucket-22": [
		{
			id: "gcp-eg-4",
			name: "/dmnd/ns-new/backup-growth/",
			growth: [
				{ week: "Week 1", size: 20 },
				{ week: "Week 2", size: 42 },
				{ week: "Week 3", size: 85 },
				{ week: "Week 4", size: 170 },
				{ week: "Week 5", size: 340 },
				{ week: "Week 6", size: 680 },
				{ week: "Week 7", size: 1360 },
				{ week: "Week 8", size: 2720 },
			],
		},
	],
	"azure-bucket-3": [
		{
			id: "azure-eg-1",
			name: "/app-insights/traces/",
			growth: [
				{ week: "Week 1", size: 12 },
				{ week: "Week 2", size: 25 },
				{ week: "Week 3", size: 55 },
				{ week: "Week 4", size: 110 },
				{ week: "Week 5", size: 220 },
				{ week: "Week 6", size: 440 },
				{ week: "Week 7", size: 880 },
				{ week: "Week 8", size: 1760 },
			],
		},
	],
	"azure-bucket-5": [
		{
			id: "azure-eg-2",
			name: "/datalake/bronze-layer/",
			growth: [
				{ week: "Week 1", size: 30 },
				{ week: "Week 2", size: 50 },
				{ week: "Week 3", size: 90 },
				{ week: "Week 4", size: 160 },
				{ week: "Week 5", size: 290 },
				{ week: "Week 6", size: 520 },
				{ week: "Week 7", size: 940 },
				{ week: "Week 8", size: 1700 },
			],
		},
	],
};

export const INVISIBLE_DATA = {
	"gcp-bucket-18": [
		{
			id: "gcp-id-1",
			name: "gcs-deng-ab-newv3-scyllabackup-prd",
			type: "soft deleted object",
			size: "53.034 TB",
			potentialSavings: 3200,
		},
	],
	"gcp-bucket-13": [
		{
			id: "gcp-id-2",
			name: "gcs-deng-dping-data-platform-realtime-prd",
			type: "soft deleted object",
			size: "164.929 TB",
			potentialSavings: 8500,
		},
	],
	"gcp-bucket-19": [
		{
			id: "gcp-id-3",
			name: "gcs-dsci-vs2-scyllabackup-prd",
			type: "soft deleted object",
			size: "48.584 TB",
			potentialSavings: 2900,
		},
	],
	"gcp-bucket-20": [
		{
			id: "gcp-id-4",
			name: "gcs-dscispark-ds-spark-operator-prd",
			type: "soft deleted object",
			size: "101.31 TB",
			potentialSavings: 5400,
		},
	],
	"gcp-bucket-21": [
		{
			id: "gcp-id-5",
			name: "gcs-elasticsearch-snapshots-p",
			type: "soft deleted object",
			size: "73.49 TB",
			potentialSavings: 4100,
		},
	],
	"gcp-bucket-15": [
		{
			id: "gcp-id-6",
			name: "gcs-deng-dpexp-ab-service-prd",
			type: "non current object",
			size: "30.601 TB",
			potentialSavings: 1800,
		},
	],
	"gcp-bucket-22": [
		{
			id: "gcp-id-7",
			name: "gcs-dmnd-ns-new-scyllabackup-prd",
			type: "soft deleted object",
			size: "6.497 TB",
			potentialSavings: 400,
		},
	],
	"gcp-bucket-23": [
		{
			id: "gcp-id-8",
			name: "gcs-dmnd-rst-scyllabackup-prd",
			type: "soft deleted object",
			size: "4.072 TB",
			potentialSavings: 250,
		},
	],
	"gcp-bucket-24": [
		{
			id: "gcp-id-9",
			name: "gcs-dmnd-srch-cg-scyllabackup-prd",
			type: "soft deleted object",
			size: "17.506 TB",
			potentialSavings: 1000,
		},
	],
	"aws-bucket-3": [
		{
			id: "aws-id-1",
			name: "/failed-jobs/temp-data/",
			type: "Orphaned Files",
			size: "120 GB",
			potentialSavings: 120,
		},
	],
	"aws-bucket-7": [
		{
			id: "aws-id-2",
			name: "/cache/zero-byte-placeholders/",
			type: "Zero-Byte Files",
			size: "5 GB",
			potentialSavings: 5,
		},
	],
	"azure-bucket-1": [
		{
			id: "azure-id-1",
			name: "/media-cache/unreferenced/",
			type: "Zero-Byte Files",
			size: "15 GB",
			potentialSavings: 15,
		},
	],
	"azure-bucket-2": [
		{
			id: "azure-id-2",
			name: "/vm-snapshots/temp-disks/",
			type: "Dangling VHDs",
			size: "200 GB",
			potentialSavings: 200,
		},
	],
};

export const STALE_DIRECTORIES_DATA = [
	{
		id: "stale-1",
		directoryName:
			"delta_lake/SILVER/mixpanel_android/anonymous_catalog_views_report_partition_fix",
		lastUpdatedAt: "2023-11-22T07:55:20.252+05:30",
		size: "19.09 TB",
	},
	{
		id: "stale-2",
		directoryName: "delta_lake/SILVER/mixpanel_android/screen_visited_partition_fix",
		lastUpdatedAt: "2023-11-22T16:16:34.939+05:30",
		size: "15.20 TB",
	},
	{
		id: "stale-3",
		directoryName: "delta_lake/SILVER/mixpanel_android/catalog_opened_main_2021_04_20",
		lastUpdatedAt: "2023-11-23T08:09:23.415+05:30",
		size: "17.98 TB",
	},
	{
		id: "stale-4",
		directoryName: "delta_lake/SILVER/mixpanel_android/plp_products_viewed",
		lastUpdatedAt: "2023-11-23T15:57:10.021+05:30",
		size: "9.50 TB",
	},
	{
		id: "stale-5",
		directoryName: "delta_lake/SILVER/mixpanel_android/anonymous_widget_views_report_partition_fix",
		lastUpdatedAt: "2023-11-24T04:45:05.954+05:30",
		size: "1.37 TB",
	},
	{
		id: "stale-6",
		directoryName: "delta_lake/SILVER/inhouse/anonymous_ad_view",
		lastUpdatedAt: "2023-11-28T16:58:49.190+05:30",
		size: "1.55 TB",
	},
	{
		id: "stale-7",
		directoryName: "delta_lake/SILVER/msg_clevertap/push_impressions_event",
		lastUpdatedAt: "2024-01-11T13:32:03.576+05:30",
		size: "31.64 TB",
	},
	{
		id: "stale-8",
		directoryName: "delta_lake/SILVER/inhouse_android/loyalty_opt_in_cta_viewed",
		lastUpdatedAt: "2024-04-22T10:28:42.910+05:30",
		size: "1.82 TB",
	},
	{
		id: "stale-9",
		directoryName:
			"delta_lake/SILVER/msg_offer_platform/offer_platform_product_offer_map_log_repartition_new",
		lastUpdatedAt: "2024-08-08T08:18:07.092+05:30",
		size: "1.13 TB",
	},
	{
		id: "stale-10",
		directoryName: "delta_lake/SILVER/ums/ums_anonymous_user_attributes",
		lastUpdatedAt: "2024-10-22T18:14:08.617+05:30",
		size: "1.80 TB",
	},
	{
		id: "stale-11",
		directoryName: "delta_lake/SILVER/msg_merchandising/clp_catalog_schema",
		lastUpdatedAt: "2024-12-06T12:54:30.873+05:30",
		size: "2.99 TB",
	},
	{
		id: "stale-12",
		directoryName:
			"delta_lake/SILVER/supplier_payment_test/supplier_payment_order_detail_payments_schema_change_schema_change_test_test",
		lastUpdatedAt: "2025-03-25T00:08:26.064+05:30",
		size: "1.30 TB",
	},
	{
		id: "stale-13",
		directoryName: "warehouse/silver/silver.db/views_3days_all_users",
		lastUpdatedAt: "2025-05-13T19:53:19.917+05:30",
		size: "160.84 TB",
	},
	{
		id: "stale-14",
		directoryName: "delta_lake/SILVER/mixpanel_android/catalog_views_report_proto",
		lastUpdatedAt: "2025-06-08T19:47:37.622+05:30",
		size: "28.62 TB",
	},
	{
		id: "stale-15",
		directoryName: "delta_lake/SILVER/mixpanel_android/widget_views_report_2021_04_20_clone_test",
		lastUpdatedAt: "2025-07-16T11:47:40.890+05:30",
		size: "3.96 TB",
	},
	{
		id: "stale-17",
		directoryName: "catalog_views_ranking",
		lastUpdatedAt: "2024-01-24T21:24:02.752+05:30",
		size: "12.00 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-18",
		directoryName: "dummy_laap_shipment_tracking_2k23_v1",
		lastUpdatedAt: "2024-02-23T09:43:25.110+05:30",
		size: "11.40 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-19",
		directoryName: "ab_experiment_all_users",
		lastUpdatedAt: "2024-02-28T09:02:11.109+05:30",
		size: "20.61 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-20",
		directoryName: "st_2k19_view",
		lastUpdatedAt: "2024-03-13T23:02:25.726+05:30",
		size: "18.26 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-21",
		directoryName: "search_session_catalog_position",
		lastUpdatedAt: "2024-03-20T07:25:35.544+05:30",
		size: "43.44 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-22",
		directoryName: "user_re_catalog_views",
		lastUpdatedAt: "2024-04-02T12:24:17.451+05:30",
		size: "22.28 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-23",
		directoryName: "dod_user_catalogue_views_zu_s1",
		lastUpdatedAt: "2024-06-04T20:40:02.018+05:30",
		size: "14.21 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-24",
		directoryName: "filter_catalog_views_report_copy",
		lastUpdatedAt: "2024-07-20T00:25:07.921+05:30",
		size: "13.84 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-25",
		directoryName: "vc_for_visual_dedup_overall_session_v2",
		lastUpdatedAt: "2024-08-29T02:14:27.980+05:30",
		size: "52.58 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-26",
		directoryName: "vc_for_visual_dedup_overall_step2",
		lastUpdatedAt: "2024-08-29T02:14:55.489+05:30",
		size: "53.20 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-27",
		directoryName: "user_clicks_sc",
		lastUpdatedAt: "2024-11-14T02:33:41.807+05:30",
		size: "73.09 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-28",
		directoryName: "daily_views_dedupe",
		lastUpdatedAt: "2024-11-15T01:28:03.228+05:30",
		size: "21.02 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-29",
		directoryName: "views_scrap",
		lastUpdatedAt: "2024-12-01T01:50:08.171+05:30",
		size: "14.48 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-30",
		directoryName: "sale_ao_hourly_comparsions",
		lastUpdatedAt: "2024-12-14T11:16:49.678+05:30",
		size: "89.88 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-31",
		directoryName: "recoRV_anon_latestPDPView_allDays",
		lastUpdatedAt: "2025-01-08T16:49:05.362+05:30",
		size: "16.02 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-32",
		directoryName: "recoRV_anon_recencyScore_new",
		lastUpdatedAt: "2025-01-08T16:49:26.502+05:30",
		size: "12.64 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-33",
		directoryName: "recoRV_anon_recencyModel_new",
		lastUpdatedAt: "2025-01-08T16:49:48.483+05:30",
		size: "22.59 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-34",
		directoryName: "recoRV_anon_recencyVariety_Model",
		lastUpdatedAt: "2025-01-08T16:50:08.520+05:30",
		size: "33.06 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-35",
		directoryName: "recoRV_siUsers_latestPDPView_allDays",
		lastUpdatedAt: "2025-01-08T17:02:07.957+05:30",
		size: "253.40 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-36",
		directoryName: "recoRV_SIusers_recencyScore",
		lastUpdatedAt: "2025-01-08T17:04:39.305+05:30",
		size: "81.90 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-37",
		directoryName: "recoRV_SIusers_recencyVariety_Model",
		lastUpdatedAt: "2025-01-08T17:06:41.656+05:30",
		size: "20.26 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-38",
		directoryName: "daily_signed_up_pdp_views",
		lastUpdatedAt: "2025-01-08T19:16:10.897+05:30",
		size: "29.44 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-39",
		directoryName: "daily_hourly_app_opens",
		lastUpdatedAt: "2025-01-08T21:05:08.869+05:30",
		size: "14.08 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-40",
		directoryName: "sale_catalog_clicks_last_30",
		lastUpdatedAt: "2025-01-08T21:19:08.473+05:30",
		size: "33.34 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-41",
		directoryName: "sale_widget_views",
		lastUpdatedAt: "2025-01-08T21:19:25.731+05:30",
		size: "39.35 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-42",
		directoryName: "experiment_users_unique_signed_up_catalog_views_deduped_metric_data",
		lastUpdatedAt: "2025-02-03T09:02:43.401+05:30",
		size: "16.89 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-43",
		directoryName: "ab_experiment_cumulative_users_snapshot",
		lastUpdatedAt: "2025-02-03T09:03:07.113+05:30",
		size: "12.69 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-44",
		directoryName: "ab_experiment_cumulative_clickers_20240705_1",
		lastUpdatedAt: "2025-02-03T09:33:06.323+05:30",
		size: "11.57 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-45",
		directoryName: "sale_ranking_metrics_4",
		lastUpdatedAt: "2025-03-24T08:34:49.377+05:30",
		size: "26.17 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-46",
		directoryName: "sale_ranking_metrics_views_4",
		lastUpdatedAt: "2025-03-24T10:20:40.727+05:30",
		size: "16.71 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-47",
		directoryName: "usf_users_cnt",
		lastUpdatedAt: "2025-04-21T19:29:33.104+05:30",
		size: "42.61 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-48",
		directoryName: "discovery_views",
		lastUpdatedAt: "2025-04-30T03:44:12.174+05:30",
		size: "16.95 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
	{
		id: "stale-49",
		directoryName: "pdp_reco_views_Daily",
		lastUpdatedAt: "2025-04-30T10:32:17.062+05:30",
		size: "131.34 TB",
		bucket: "gcs-deng-dping-data-platform-hive-gold-prd",
	},
];
