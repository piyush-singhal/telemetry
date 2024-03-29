import { MetricsService } from "./metrics.service";
import { MetricsV1Dto } from "./dto/metrics.v1.dto";
import { UpdateSchemaDto } from "./dto/update.schema.dto";
export declare class MetricsV1Controller {
    private readonly metricsService;
    constructor(metricsService: MetricsService);
    saveMetrics(metricList: MetricsV1Dto[]): Promise<Response>;
    updateSchema(updateSchemaDto: UpdateSchemaDto): Promise<{
        error: boolean;
        message: string;
        errorData: any;
        data?: undefined;
    } | {
        error: boolean;
        message: string;
        data: any;
        errorData?: undefined;
    }>;
    searchContent(limit: string, page: string, orderBy?: string, order?: string, : any): Promise<Response>;
}
