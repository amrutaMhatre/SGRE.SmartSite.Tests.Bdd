// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DocUtils.cs" company="Microsoft">
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//   THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
//   OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
//   ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//   OTHER DEALINGS IN THE SOFTWARE.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Bdd.Core.Docs
{

    using NUnit.Framework;
    using System.Diagnostics.CodeAnalysis;
    using System.Threading.Tasks;

    [Ignore("Manually triggered...")]
    [TestFixture]
    public class DocUtils
    {
        private readonly DocProcessor docProcessor = new DocProcessor();

        [Test]
        [Category("Docs")]
        [Category("AzDevOps_Sync")]
        public async Task TestDryRun()
        {
            var result = await this.docProcessor.GenerateVstsTestCasesFromBddFeatures(feature => true, scenario => true, true, false).ConfigureAwait(false);
            Assert.IsTrue(result);
        }

        //[Test]
        //[Category("Docs")]
        //[Category("AzDevOps_Sync")]
        //public async Task GenerateTestCaseUserStoryAssociationsMatrix()
        //{
        //    var result = await this.docProcessor.GenerateTestCaseUserStoryAssociationsMatrix().ConfigureAwait(false);
        //    Assert.IsTrue(result);
        //}

        //[Test]
        //[Category("Docs")]
        //[Category("AzDevOps_Sync")]
        //public async Task GenerateTestCasesReport()
        //{
        //    var result = await this.docProcessor.GenerateTestCasesReport(feature => true, scenario => true, true).ConfigureAwait(false);
        //    Assert.IsTrue(result);
        //}

        //[Test]
        //[Category("Docs")]
        //public async Task ValidateStaleStepsInBddFeatures()
        //{
        //    var result = await this.docProcessor.ValidateStaleStepsInBddFeatures(true).ConfigureAwait(false);
        //    Assert.IsTrue(result);
        //}

        //[Test]
        //[Category("Docs")]
        //public async Task ValidateGenericStepsInBddFeatures()
        //{
        //    var result = await this.docProcessor.ValidateGenericStepsInBddFeatures().ConfigureAwait(false);
        //    Assert.IsTrue(result);
        //}

        //[Test]
        //[Category("Docs")]
        //public async Task UpgradeVersionForUpdatedScenarios()
        //{
        //    var result = await this.docProcessor.UpgradeVersionForUpdatedScenarios().ConfigureAwait(false);
        //    Assert.IsTrue(result);
        //}
    }

}