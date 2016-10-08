/**
 * @file YOG2 日志配置
 * @author fis@baidu.com
 * 更多的配置可以参考 https://github.com/fex-team/yog-log
 */

/* global yog */

/* eslint-disable fecs-camelcase, camelcase */

module.exports.log = {
    /**
     **************************************************************************
     *
     * app配置
     *
     *
     * Log的归属App名称，日志将会保存在log/{app}目录中，即使使用autoAppName也需要提供默认的app名称
     ***************************************************************************/
    app: 'yog',

    /**
     **************************************************************************
     *
     * autoAppName配置
     *
     *
     * 自动判断当前请求所在的app
     ***************************************************************************/
    autoAppName: false,

    /**
     **************************************************************************
     *
     * intLevel配置
     *
     *
     * 控制Log输出的日志级别
     *
     * FATAL 1   打印FATAL
     * WARNING 2   打印FATAL和WARNING
     * NOTICE  4   打印FATAL、WARNING、NOTICE (线上程序正常运行时的配置)
     * TRACE   8   打印FATAL、WARNING、NOTICE、TRACE (线上程序异常时使用该配置)
     * DEBUG   16  打印FATAL、WARNING、NOTICE、TRACE、DEBUG (测试环境配置)
     ***************************************************************************/

    intLevel: 16,

    /**
     **************************************************************************
     *
     * IS_OMP配置
     *
     *
     * 控制是否输出omp格式的日志，不适用omp设置为2即可
     ***************************************************************************/

    IS_OMP: 2,

    /**
     **************************************************************************
     *
     * auto_rotate配置
     *
     *
     * 控制是否自动将日志根据小时切分
     ***************************************************************************/

    auto_rotate: 1,

    /**
     **************************************************************************
     *
     * debug配置
     *
     *
     * 开启debug后，日志将在控制台输出而不是文件中输出
     ***************************************************************************/

    debug: 1,

    /**
     **************************************************************************
     *
     * format配置
     *
     *
     * 常规日志输出格式，具体参数请参考 https://github.com/fex-team/yog-log
     ***************************************************************************/

    // format: '%L: %t [%f:%N] errno[%E] logId[%l] uri[%U] user[%u] refer[%{referer}i] cookie[%{cookie}i] %S %M',

    /**
     **************************************************************************
     *
     * format_wf配置
     *
     *
     * 警告与错误日志输出格式，具体参数请参考 https://github.com/fex-team/yog-log
     ***************************************************************************/

    // format_wf: '%L: %t [%f:%N] errno[%E] logId[%l] uri[%U] user[%u] refer[%{referer}i] cookie[%{cookie}i] %S %M',

    /**
     **************************************************************************
     *
     * data_path配置
     *
     *
     * 一般情况使用默认值即可，存放一些临时文件
     ***************************************************************************/

    data_path: yog.ROOT_PATH + '/tmp',

    /**
     **************************************************************************
     *
     * log_path配置
     *
     *
     * Log的存放目录
     ***************************************************************************/

    log_path: yog.ROOT_PATH + '/log',

    /**
     **************************************************************************
     *
     * use_sub_dir
     *
     *
     * Log是否分App存放
     ***************************************************************************/

    use_sub_dir: 1
};
